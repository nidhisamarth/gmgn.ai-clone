
import React from 'react';
import { Filter } from 'lucide-react';

const CopyTradeTableHeader = () => {
  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <span>Wallet / SOL Bal</span>
          <button>
            <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
          </button>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span>1D PnL</span>
            <button>
              <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <span>USD</span>
            <button>
              <div className="w-0 h-0 border-l-2 border-r-2 border-b-3 border-transparent border-b-gray-400"></div>
            </button>
          </div>
          
          <Filter className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default CopyTradeTableHeader;
