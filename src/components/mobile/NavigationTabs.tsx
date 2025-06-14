
import React, { useState } from 'react';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('Trenches');
  
  const tabs = ['Trenches', 'New', 'Trending', 'CopyTrade', 'Monitor', 'Follow'];

  return (
    <div className="bg-gray-800 px-4 py-3">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap pb-1 transition-colors ${
              activeTab === tab 
                ? 'text-white border-b-2 border-green-400' 
                : 'text-gray-400'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
