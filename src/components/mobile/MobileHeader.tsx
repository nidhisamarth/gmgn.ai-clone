
import React from 'react';
import { Search, Target, ChevronDown, Folder } from 'lucide-react';

const MobileHeader = () => {
  return (
    <div className="bg-black px-4 py-3 flex items-center justify-between">
      {/* Left section with frog icon and SOL dropdown */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded flex items-center justify-center">
          <img 
            src="/lovable-uploads/3446d744-cd08-43f6-beba-f962a9fb2d58.png" 
            alt="Frog icon" 
            className="w-8 h-8"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-white font-medium">SOL</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Center section with search and target icons */}
      <div className="flex items-center gap-4">
        <Search className="w-6 h-6 text-white" />
        <Target className="w-6 h-6 text-white" />
      </div>

      {/* Right section with folder and dropdown */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded border border-gray-600">
          <Folder className="w-4 h-4 text-white" />
          <span className="text-white text-sm">0</span>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

export default MobileHeader;
