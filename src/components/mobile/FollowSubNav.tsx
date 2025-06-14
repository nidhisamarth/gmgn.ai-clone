
import React, { useState } from 'react';

const FollowSubNav = () => {
  const [activeTab, setActiveTab] = useState('Follow');
  
  const tabs = ['Follow', 'Watchlist', 'Activity', 'Remarks'];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap text-base transition-colors ${
              activeTab === tab 
                ? 'text-white font-medium' 
                : 'text-gray-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FollowSubNav;
