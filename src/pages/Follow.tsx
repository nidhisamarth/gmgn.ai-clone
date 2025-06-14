
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';

const Follow = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <MobileHeader />
      <NavigationTabs />
      <div className="px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Follow</h1>
        <p className="text-gray-400">Following features will appear here</p>
      </div>
    </div>
  );
};

export default Follow;
