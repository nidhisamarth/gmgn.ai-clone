
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HoldingFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Profitable', 'Losing', 'Recent'];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                activeFilter === filter
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <button className="flex items-center gap-1 text-gray-400 text-sm">
          <span>Sort</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default HoldingFilters;
