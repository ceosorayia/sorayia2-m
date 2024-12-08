import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { ethers, BigNumber } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { TOKEN_ADDRESS, STAKING_ADDRESS, TOKEN_DECIMALS } from '../contracts/config';
import ERC20ABI from '../contracts/abis/ERC20ABI.json';
import StakingABI from '../contracts/abis/StakingABI.json';
import { 
  isValidAmount, 
  checkTransactionThrottle, 
  sanitizeInput,
  validateTransaction,
  validateNetwork 
} from '../utils/security';
import { UserStake, TimeLeft, StakingCardProps } from '../types/staking';

const EXPECTED_CHAIN_ID = 56; // BSC Mainnet

const StakingCard: React.FC<StakingCardProps> = () => {
  const { active, account, library } = useWeb3React<Web3Provider>();
  const [tokenBalance, setTokenBalance] = useState<string>("0");
  const [stakedAmount, setStakedAmount] = useState<string>("0");
  const [pendingRewards, setPendingRewards] = useState<string>("0");
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [withdrawAmount, setWithdrawAmount] = useState<string>("");
  const [isStaking, setIsStaking] = useState<boolean>(false);
  const [isWithdrawing, setIsWithdrawing] = useState<boolean>(false);
  const [isClaiming, setIsClaiming] = useState<boolean>(false);
  const [isApproving, setIsApproving] = useState<boolean>(false);
  const [allowance, setAllowance] = useState<string>("0");
  const [lockEndTime, setLockEndTime] = useState<number>(0);
  const [minStakeAmount, setMinStakeAmount] = useState<string>("0");
  const [maxStakeAmount, setMaxStakeAmount] = useState<string>("0");
  const [lockPeriod, setLockPeriod] = useState<number>(0);
  const [totalStakedAmount, setTotalStakedAmount] = useState<string>("0");
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [error, setError] = useState<string>("");

  // Contract instances
  const tokenContract = React.useMemo(() => {
    if (library && active) {
      try {
        const contract = new ethers.Contract(TOKEN_ADDRESS, ERC20ABI, library.getSigner());
        if (!contract.address) throw new Error('Invalid token contract');
        return contract;
      } catch (error) {
        console.error('Error creating token contract:', error);
        setError('Invalid token contract');
        return null;
      }
    }
    return null;
  }, [library, active]);

  const stakingContract = React.useMemo(() => {
    if (library && active) {
      try {
        const contract = new ethers.Contract(STAKING_ADDRESS, StakingABI, library.getSigner());
        if (!contract.address) throw new Error('Invalid staking contract');
        return contract;
      } catch (error) {
        console.error('Error creating staking contract:', error);
        setError('Invalid staking contract');
        return null;
      }
    }
    return null;
  }, [library, active]);

  // Input handlers and validation
  const handleStakeAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setStakeAmount(sanitizedValue);
    setError("");
  };

  const handleWithdrawAmountChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sanitizedValue = sanitizeInput(e.target.value);
    setWithdrawAmount(sanitizedValue);
    setError("");
  };

  // Validation functions
  const validateStakeAmount = (): void => {
    if (!isValidAmount(stakeAmount, tokenBalance, minStakeAmount, maxStakeAmount)) {
      throw new Error('Invalid stake amount');
    }
  };

  const validateWithdrawAmount = (): void => {
    if (!isValidAmount(withdrawAmount, stakedAmount, "0", stakedAmount)) {
      throw new Error('Invalid withdraw amount');
    }
  };

  // Main actions
  const stake = async (): Promise<void> => {
    try {
      setError("");
      if (!active || !account) throw new Error('Wallet not connected');
      if (!stakingContract) throw new Error('Contract not initialized');
      if (!library) throw new Error('Library not initialized');
      
      // Security: Network validation
      const isCorrectNetwork = await validateNetwork(library, EXPECTED_CHAIN_ID);
      if (!isCorrectNetwork) throw new Error('Please connect to BSC Mainnet');

      // Security: Rate limiting
      checkTransactionThrottle(account, 'stake');
      
      validateStakeAmount();
      setIsStaking(true);

      const amount = ethers.utils.parseUnits(stakeAmount, TOKEN_DECIMALS);
      
      // Security: Transaction parameter validation
      const tx = await stakingContract.stake(amount);
      await validateTransaction(tx);
      
      await tx.wait();
      setStakeAmount("");
      // Refresh balances...
    } catch (error: any) {
      console.error('Staking error:', error);
      setError(error.message || 'Error staking tokens');
    } finally {
      setIsStaking(false);
    }
  };

  const withdraw = async (): Promise<void> => {
    try {
      setError("");
      if (!active || !account) throw new Error('Wallet not connected');
      if (!stakingContract) throw new Error('Contract not initialized');
      if (!library) throw new Error('Library not initialized');
      
      // Security: Network validation
      const isCorrectNetwork = await validateNetwork(library, EXPECTED_CHAIN_ID);
      if (!isCorrectNetwork) throw new Error('Please connect to BSC Mainnet');

      // Security: Rate limiting
      checkTransactionThrottle(account, 'withdraw');
      
      validateWithdrawAmount();
      setIsWithdrawing(true);

      const amount = ethers.utils.parseUnits(withdrawAmount, TOKEN_DECIMALS);
      
      // Security: Transaction parameter validation
      const tx = await stakingContract.withdraw(amount);
      await validateTransaction(tx);
      
      await tx.wait();
      setWithdrawAmount("");
      // Refresh balances...
    } catch (error: any) {
      console.error('Withdrawal error:', error);
      setError(error.message || 'Error withdrawing tokens');
    } finally {
      setIsWithdrawing(false);
    }
  };

  const handleClaim = async (): Promise<void> => {
    try {
      setError("");
      if (!active || !account) throw new Error('Wallet not connected');
      if (!stakingContract) throw new Error('Contract not initialized');
      if (!library) throw new Error('Library not initialized');
      
      // Security: Network validation
      const isCorrectNetwork = await validateNetwork(library, EXPECTED_CHAIN_ID);
      if (!isCorrectNetwork) throw new Error('Please connect to BSC Mainnet');

      // Security: Rate limiting
      checkTransactionThrottle(account, 'claim');
      
      setIsClaiming(true);
      
      // Security: Transaction parameter validation
      const tx = await stakingContract.claimRewards();
      await validateTransaction(tx);
      
      await tx.wait();
      
      // Refresh rewards data
      const userStake = await stakingContract.getUserStake(account);
      setPendingRewards(formatAmount(userStake.pendingRewards));
      
    } catch (error: any) {
      console.error('Claim error:', error);
      setError(error.message || 'Error claiming rewards');
    } finally {
      setIsClaiming(false);
    }
  };

  const handleApprove = async (): Promise<void> => {
    if (!active || !tokenContract || !account) return;
    setIsApproving(true);
    try {
      const tx = await tokenContract.approve(
        STAKING_ADDRESS,
        ethers.constants.MaxUint256
      );
      await tx.wait();
      const newAllowance = await tokenContract.allowance(account, STAKING_ADDRESS);
      setAllowance(formatAmount(newAllowance));
    } catch (error) {
      console.error("Approval failed:", error);
    }
    setIsApproving(false);
  };

  const needsApproval = parseFloat(allowance) === 0 || parseFloat(allowance) < parseFloat(stakeAmount || "0");

  // Utility functions
  const formatAmount = (amount: BigNumber | string): string => {
    try {
      if (!amount || amount === "0" || amount === "0.0") return "0.0000";
      return ethers.utils.formatUnits(amount.toString(), TOKEN_DECIMALS);
    } catch (error) {
      console.error("Error formatting amount:", error);
      return "0.0000";
    }
  };

  const parseAmount = (amount: string): BigNumber => {
    return ethers.utils.parseUnits(amount.toString(), TOKEN_DECIMALS);
  };

  const formatTimeLeft = (endTime: number): string => {
    if (!endTime) return "No lock";
    const now = Math.floor(Date.now() / 1000);
    const timeLeft = endTime - now;
    if (timeLeft <= 0) return "Unlocked";
    
    const days = Math.floor(timeLeft / 86400);
    const hours = Math.floor((timeLeft % 86400) / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    
    return `${days}d ${hours}h ${minutes}m`;
  };

  const calculateTimeLeft = (endTime: number): TimeLeft => {
    const now = Math.floor(Date.now() / 1000);
    const difference = endTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / 86400),
      hours: Math.floor((difference % 86400) / 3600),
      minutes: Math.floor((difference % 3600) / 60),
      seconds: Math.floor(difference % 60)
    };
  };

  // Effects
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (!active || !account || !tokenContract || !stakingContract) {
        console.log("Missing requirements:", { active, account, hasTokenContract: !!tokenContract, hasStakingContract: !!stakingContract });
        return;
      }

      try {
        console.log("Fetching data for account:", account);
        const [
          balance, 
          userStake, 
          currentAllowance,
          minStake,
          maxStake,
          lockPeriodValue,
          totalStaked
        ] = await Promise.all([
          tokenContract.balanceOf(account),
          stakingContract.getUserStake(account),
          tokenContract.allowance(account, STAKING_ADDRESS),
          stakingContract.minStakeAmount(),
          stakingContract.maxStakeAmount(),
          stakingContract.lockPeriod(),
          stakingContract.totalStaked()
        ]);

        console.log("Data fetched successfully:", {
          balance: formatAmount(balance),
          stakedAmount: formatAmount(userStake.stakedAmount),
          pendingRewards: formatAmount(userStake.pendingRewards),
          lockEndTime: userStake.lockEndTime.toNumber()
        });

        setTokenBalance(formatAmount(balance));
        setStakedAmount(formatAmount(userStake.stakedAmount));
        setPendingRewards(formatAmount(userStake.pendingRewards));
        setLockEndTime(userStake.lockEndTime.toNumber());
        setAllowance(formatAmount(currentAllowance));
        setMinStakeAmount(formatAmount(minStake));
        setMaxStakeAmount(formatAmount(maxStake));
        setLockPeriod(lockPeriodValue.toNumber());
        setTotalStakedAmount(formatAmount(totalStaked));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);
    return () => clearInterval(interval);
  }, [active, account, tokenContract, stakingContract, library]);

  useEffect(() => {
    const updatePendingRewards = async (): Promise<void> => {
      if (!active || !stakingContract || !account) return;
      
      try {
        const userStake = await stakingContract.getUserStake(account);
        setPendingRewards(formatAmount(userStake.pendingRewards));
      } catch (error) {
        console.error("Error fetching pending rewards:", error);
      }
    };

    updatePendingRewards();
    const interval = setInterval(updatePendingRewards, 10000); // Update every 10 seconds
    
    return () => clearInterval(interval);
  }, [active, stakingContract, account]);

  useEffect(() => {
    if (!lockEndTime) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(lockEndTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [lockEndTime]);

  return (
    <div className="card relative overflow-hidden bg-gray-800 rounded-xl p-6 shadow-xl">
      {error && (
        <div className="bg-red-500 text-white p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      <div className="grid gap-6">
        {/* Total Value Locked */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Total Value Locked</h3>
          <div className="flex items-center justify-center gap-2">
            <span className="text-3xl font-bold text-white">{formatAmount(totalStakedAmount)}</span>
            <span className="text-lg text-gray-400">SORAYIA</span>
          </div>
        </div>

        {/* Lock Period Info */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Lock Period: 90 Days</h3>
          <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto mb-4">
            <div className="bg-gray-700/50 rounded-lg p-2">
              <div className="text-2xl font-bold text-gray-300">{timeLeft.days}</div>
              <div className="text-xs text-gray-400">Days</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-2">
              <div className="text-2xl font-bold text-gray-300">{timeLeft.hours}</div>
              <div className="text-xs text-gray-400">Hours</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-2">
              <div className="text-2xl font-bold text-gray-300">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-400">Minutes</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-2">
              <div className="text-2xl font-bold text-gray-300">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-400">Seconds</div>
            </div>
          </div>
          <p className="text-gray-400">{timeLeft.days > 0 || timeLeft.hours > 0 || timeLeft.minutes > 0 || timeLeft.seconds > 0 ? "Time remaining until unlock..." : "Unlocked!"}</p>
        </div>

        {/* Balance */}
        <div className="bg-gray-700/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Your Balance</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white">{parseFloat(tokenBalance).toFixed(4)}</span>
            <span className="text-sm text-gray-400">SORAYIA</span>
          </div>
        </div>
        
        {/* Staking Section */}
        <div className="bg-gray-700/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">Stake SORAYIA</p>
          <p className="text-xs text-gray-500 mb-2">
            Min: {parseFloat(minStakeAmount).toFixed(2)} | Max: {parseFloat(maxStakeAmount).toFixed(2)}
          </p>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              value={stakeAmount}
              onChange={handleStakeAmountChange}
              placeholder="Amount to stake"
              className="flex-1 bg-gray-800 rounded px-3 py-2 text-white"
              disabled={!active || isStaking || isApproving}
            />
            {needsApproval ? (
              <button
                onClick={handleApprove}
                disabled={!active || isApproving}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {isApproving ? 'Approving...' : 'Approve'}
              </button>
            ) : (
              <button
                onClick={stake}
                disabled={
                  !active || !stakeAmount || isStaking || 
                  parseFloat(stakeAmount) > parseFloat(tokenBalance) ||
                  parseFloat(stakeAmount) < parseFloat(minStakeAmount) ||
                  parseFloat(stakeAmount) > parseFloat(maxStakeAmount)
                }
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:opacity-50"
              >
                {isStaking ? 'Staking...' : 'Stake'}
              </button>
            )}
          </div>
        </div>

        {/* Total Staked */}
        <div className="bg-gray-700/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Total Staked</p>
          <div className="flex items-end gap-2">
            <span className="text-2xl font-bold text-white">{formatAmount(stakedAmount)}</span>
          </div>
        </div>
        
        {/* Withdraw Section */}
        <div className="bg-gray-700/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-2">Withdraw SORAYIA</p>
          <div className="flex gap-2 mb-2">
            <input
              type="number"
              placeholder="Amount to withdraw"
              className="flex-1 bg-gray-800 rounded px-3 py-2 text-white"
              value={withdrawAmount}
              onChange={handleWithdrawAmountChange}
              min="0"
              step="0.0001"
            />
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded disabled:opacity-50"
              disabled={!active || isWithdrawing || !withdrawAmount || parseFloat(withdrawAmount) <= 0 || parseFloat(withdrawAmount) > parseFloat(formatAmount(stakedAmount))}
              onClick={withdraw}
            >
              {isWithdrawing ? 'Withdrawing...' : 'Withdraw'}
            </button>
          </div>
        </div>
        
        {/* Rewards Section */}
        <div className="bg-gray-700/50 rounded-lg p-4">
          <p className="text-gray-400 text-sm mb-1">Pending Rewards</p>
          <div className="flex items-end gap-2 mb-3">
            <span className="text-2xl font-bold text-white">{formatAmount(pendingRewards)}</span>
            <span className="text-sm text-gray-400">SORAYIA</span>
          </div>
          <button
            className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mt-2 disabled:opacity-50"
            onClick={handleClaim}
            disabled={!active || isClaiming || parseFloat(pendingRewards) === 0}
          >
            {isClaiming ? 'Claiming...' : 'Claim Rewards'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StakingCard;
