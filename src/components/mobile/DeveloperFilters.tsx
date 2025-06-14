
import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const DeveloperFilters = () => {
  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Devs icon */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center">
              <span className="text-white text-xs">💻</span>
            </div>
            <span className="text-white text-sm">Devs</span>
          </div>
          
          {/* Search icon */}
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </button>
          
          {/* Filter with number */}
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded text-sm">
            <Filter className="w-4 h-4 text-white" />
            <span className="text-white">9</span>
          </button>
          
          {/* Folder with number */}
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded text-sm">
            <div className="w-3 h-3 flex flex-col justify-center">
              <div className="w-3 h-1 bg-white rounded-sm mb-0.5"></div>
              <div className="w-3 h-1 bg-white rounded-sm"></div>
            </div>
            <span className="text-white">1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          
          {/* Lightning bolt */}
          <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">⚡</span>
          </button>
          
          {/* Filter with 0 */}
          <button className="flex items-center gap-1 bg-gray-700 px-3 py-2 rounded text-sm">
            <div className="flex flex-col gap-0.5">
              <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
              <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
              <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
            </div>
            <span className="text-white">0</span>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 bg-gray-800 px-3 py-2 rounded text-sm border border-gray-600">
            <span className="text-white">P1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </button>
          
          <button className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center">
            <div className="w-4 h-4 border border-gray-400 rounded-full relative">
              <div className="absolute inset-1 border border-gray-400 rounded-full"></div>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-400"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-400"></div>
              <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-0.5 bg-gray-400"></div>
              <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-0.5 bg-gray-400"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperFilters;
