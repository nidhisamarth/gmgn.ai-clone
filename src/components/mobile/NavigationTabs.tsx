
import React, { useState } from 'react';

const NavigationTabs = () => {
  const [activeTab, setActiveTab] = useState('Trenches');
  
  const tabs = ['Trenches', 'New', 'Trending', 'CopyTrade', 'Monitor', 'Follow'];

  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`whitespace-nowrap pb-1 text-sm transition-colors ${
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

export default NavigationTabs;
