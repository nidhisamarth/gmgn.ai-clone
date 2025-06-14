
import React, { useState } from 'react';

const TrendingFilters = () => {
  const [activeFilter, setActiveFilter] = useState('1h');
  
  const filters = ['1m', '5m', '1h', '6h'];

  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-white text-lg font-medium">Trending</span>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-xs">BC</span>
            </div>
            <span className="text-sm">NextBC</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-500 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingFilters;
