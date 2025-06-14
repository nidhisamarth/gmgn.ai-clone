
import React, { useState } from 'react';

const CopyTradeFilters = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Pump SM', 'Smart Money', 'KOL/VC', 'Fresh Wallet', 'Sniper'];

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap text-sm px-3 py-1.5 rounded transition-colors ${
              activeFilter === filter
                ? 'text-white bg-gray-700'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CopyTradeFilters;
