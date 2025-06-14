
import React from 'react';
import { Filter } from 'lucide-react';

const TokenTableHeaders = () => {
  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Token</span>
          <button>
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
          </button>
          <Filter className="w-4 h-4 text-gray-400" />
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Liq</span>
          <button>
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
          </button>
          <span className="text-gray-400 text-sm">/Initial</span>
          <Filter className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default TokenTableHeaders;
