import { BigNumber } from 'ethers';

export interface UserStake {
    stakedAmount: BigNumber;
    pendingRewards: BigNumber;
    lockEndTime: BigNumber;
}

export interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface StakingCardProps {
    apy?: string;
    lockPeriod?: string;
}
