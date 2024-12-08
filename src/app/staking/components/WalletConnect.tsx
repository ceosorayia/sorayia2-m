import React, { useEffect, useState } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injected } from '../connectors';
import { validateNetwork, secureStorage } from '../utils/security';
import { Web3Provider } from '@ethersproject/providers';

const EXPECTED_CHAIN_ID = 56; // BSC Mainnet
const MAX_RECONNECT_ATTEMPTS = 3;

const WalletConnect: React.FC = () => {
  const { activate, active, account, error, deactivate, library } = useWeb3React<Web3Provider>();
  const [reconnectAttempts, setReconnectAttempts] = useState<number>(0);
  const [lastConnectedAddress, setLastConnectedAddress] = useState<string | null>(null);

  useEffect(() => {
    // Try to activate wallet connection on component mount
    const connectOnLoad = async (): Promise<void> => {
      try {
        // Check if the wallet was previously connected
        const isAuthorized = await injected.isAuthorized();
        if (isAuthorized && reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
          // Verify stored address matches
          const storedAddress = secureStorage.getItem('lastConnectedAddress');
          if (storedAddress) {
            await activate(injected);
            setReconnectAttempts(prev => prev + 1);
          }
        }
      } catch (error) {
        console.error("Error auto connecting wallet:", error);
        handleWalletError(error instanceof Error ? error : new Error(String(error)));
      }
    };
    connectOnLoad();
  }, [activate, reconnectAttempts]);

  useEffect(() => {
    if (account) {
      // Store connected address securely
      secureStorage.setItem('lastConnectedAddress', account);
      setLastConnectedAddress(account);
    }
  }, [account]);

  const handleWalletError = (error: Error): void => {
    console.error('Wallet error:', error);
    // Clear stored data on error
    secureStorage.setItem('lastConnectedAddress', null);
    setLastConnectedAddress(null);
    deactivate();
  };

  const connectWallet = async (): Promise<void> => {
    try {
      if (library) {
        // Validate network before connecting
        const isCorrectNetwork = await validateNetwork(library, EXPECTED_CHAIN_ID);
        if (!isCorrectNetwork) {
          throw new Error('Please connect to BSC Mainnet');
        }
      }

      await activate(injected);
      console.log("Wallet connected successfully");
      
      // Reset reconnect attempts on successful manual connection
      setReconnectAttempts(0);
    } catch (error) {
      handleWalletError(error as Error);
    }
  };

  const disconnectWallet = (): void => {
    try {
      deactivate();
      secureStorage.setItem('lastConnectedAddress', null);
      setLastConnectedAddress(null);
      setReconnectAttempts(0);
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  return (
    <div className="flex justify-center pb-8">
      <div className="flex connector items-center gap-3 relative">
        {error ? (
          <button 
            onClick={connectWallet}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
          >
            Error Connecting
          </button>
        ) : active ? (
          <div className="flex gap-2">
            <div className="bg-indigo-600 text-white px-6 py-2 rounded-lg">
              {account ? `${account.substring(0, 6)}...${account.substring(38)}` : 'Connected'}
            </div>
            <button
              onClick={disconnectWallet}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={connectWallet}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default WalletConnect;
