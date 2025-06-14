
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const tabs = [
    { name: 'Trenches', path: '/' },
    { name: 'New', path: '/new' },
    { name: 'Trending', path: '/trending' },
    { name: 'CopyTrade', path: '/copytrade' },
    { name: 'Monitor', path: '/monitor' },
    { name: 'Follow', path: '/follow' }
  ];

  const getActiveTab = () => {
    const currentTab = tabs.find(tab => tab.path === location.pathname);
    return currentTab ? currentTab.name : 'Trenches';
  };

  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => navigate(tab.path)}
            className={`whitespace-nowrap pb-1 text-sm transition-colors ${
              getActiveTab() === tab.name 
                ? 'text-white font-medium' 
                : 'text-gray-500'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
