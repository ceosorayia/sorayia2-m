import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ethers } from 'ethers';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import WalletConnect from './components/WalletConnect';
import StakingCard from './components/StakingCard';

// Security: Validate provider before creating library
function getLibrary(provider: any): ethers.providers.Web3Provider {
  if (!provider) {
    throw new Error('Provider is required');
  }
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Security: Content Security Policy */}
        <meta httpEquiv="Content-Security-Policy" 
          content="default-src 'self'; 
                   script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
                   style-src 'self' 'unsafe-inline';
                   connect-src 'self' https://*.infura.io https://*.binance.org wss://*.infura.io wss://*.binance.org;" 
        />
        {/* Security: Additional Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
      </Helmet>
      <Web3ReactProvider getLibrary={getLibrary}>
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-8">
          <div className="container mx-auto px-4">
            <header className="text-center mb-12">
              <h1 className="text-4xl font-bold text-white mb-4">SORAYIA Staking</h1>
              <p className="text-gray-400">Stake your SORAYIA tokens and earn rewards</p>
            </header>
            
            <div className="relative">
              <WalletConnect />
              <div className="grid grid-cols-1 gap-8 max-w-lg mx-auto">
                <StakingCard apy="220" lockPeriod="3" />
              </div>
            </div>
          </div>
        </div>
      </Web3ReactProvider>
    </HelmetProvider>
  );
}

export default App;
