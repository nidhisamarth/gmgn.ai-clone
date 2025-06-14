
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';

const Holding = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <MobileHeader />
      <NavigationTabs />
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 mb-4">
          <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-500 text-2xl">📊</span>
          </div>
        </div>
        <span className="text-gray-500 text-sm">Holding Page</span>
        <span className="text-gray-400 text-xs mt-2">Content coming soon</span>
      </div>
    </div>
  );
};

export default Holding;
