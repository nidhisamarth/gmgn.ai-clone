
import React from 'react';
import { ChevronDown } from 'lucide-react';

const TrenchesSection = () => {
  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left section with Trenches title and dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🏔️</span>
          <span className="text-white font-medium">Trenches</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white text-xs">≡</span>
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white text-xs">🏠</span>
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-white text-xs">≡</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-800 px-2 py-1 rounded text-xs text-white border border-gray-600 flex items-center gap-1">
            <span>📁</span>
            <span>1</span>
          </div>
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">⚡</span>
          </div>
          <div className="bg-gray-800 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
            <span>≡</span>
            <span>0</span>
          </div>
          <div className="bg-gray-800 px-2 py-1 rounded text-xs text-white">
            P1
          </div>
          <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-400 text-xs">⚙</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrenchesSection;
