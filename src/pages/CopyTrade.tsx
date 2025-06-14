
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';

const CopyTrade = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <MobileHeader />
      <NavigationTabs />
      <div className="px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Copy Trade</h1>
        <p className="text-gray-400">Copy trading features will appear here</p>
      </div>
    </div>
  );
};

export default CopyTrade;
