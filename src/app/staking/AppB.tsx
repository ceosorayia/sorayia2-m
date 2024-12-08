import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Coins } from 'lucide-react';
import { StakingDashboard } from './components/StakingDashboard';
import { Navigation } from './components/Navigation';

function App() {
  const [connected, setConnected] = useState(false);
  const [view, setView] = useState<'buy' | 'stake'>('stake');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <Toaster position="top-right" />
      
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          {/* <div className="flex items-center justify-center gap-3 mb-6">
            <Coins className="w-16 h-16 text-yellow-400" />
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-purple-400 to-blue-400">
              $SRA Staking
            </h1>
          </div> */}
          <p className="text-xl text-blue-200">Stake your tokens and earn rewards</p>
        </div>

        <Navigation 
          connected={connected} 
          setConnected={setConnected}
          currentView={view}
          onViewChange={setView}
        />

        <div className="mt-8">
          {connected && <StakingDashboard />}
        </div>
      </div>
    </div>
  );
}

export default App;