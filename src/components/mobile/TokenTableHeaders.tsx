
import React from 'react';
import { Filter } from 'lucide-react';

const TokenTableHeaders = () => {
  return (
    <div className="bg-black px-4 py-3 border-b border-gray-800">
      <div className="flex items-center justify-between text-gray-400 text-sm">
        <div className="flex items-center gap-2 flex-1">
          <span className="text-sm">Token</span>
          <button className="flex items-center justify-center touch-manipulation">
            <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400"></div>
          </button>
          <Filter className="w-4 h-4" />
        </div>
        
        <div className="flex items-center gap-6 text-right">
          <div className="flex items-center gap-2">
            <span className="text-sm">Liq</span>
            <button className="flex items-center justify-center touch-manipulation">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400"></div>
            </button>
            <Filter className="w-4 h-4" />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm">MC</span>
            <button className="flex items-center justify-center touch-manipulation">
              <div className="w-0 h-0 border-l-[3px] border-r-[3px] border-b-[4px] border-transparent border-b-gray-400"></div>
            </button>
          </div>
          
          <div className="flex flex-col items-center text-xs text-gray-500 leading-tight">
            <span>P1</span>
            <span>P2</span>
            <span>P3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenTableHeaders;
