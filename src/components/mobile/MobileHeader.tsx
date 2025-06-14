
import React from 'react';
import { Search, Target, ChevronDown } from 'lucide-react';

const MobileHeader = () => {
  // Prevent header icons from causing navigation
  const handleIconClick = (e: React.MouseEvent, iconType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Header icon clicked: ${iconType}`);
    // These would handle their respective functionality without navigation
  };

  const handleButtonClick = (e: React.MouseEvent, buttonType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Header button clicked: ${buttonType}`);
    // These would handle their respective functionality without navigation
  };

  return (
    <div className="bg-black px-4 py-2 flex items-center justify-between h-12">
      {/* Left section with frog icon and SOL dropdown */}
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded flex items-center justify-center">
          <img 
            src="/lovable-uploads/3446d744-cd08-43f6-beba-f962a9fb2d58.png" 
            alt="Frog icon" 
            className="w-7 h-7"
          />
        </div>
        <button 
          className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm"
          onClick={(e) => handleButtonClick(e, 'sol-dropdown')}
        >
          <span className="text-white font-medium text-sm">SOL</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </button>
      </div>

      {/* Center section with search and target icons */}
      <div className="flex items-center gap-6">
        <button onClick={(e) => handleIconClick(e, 'search')}>
          <Search className="w-5 h-5 text-white" />
        </button>
        <button onClick={(e) => handleIconClick(e, 'target')}>
          <Target className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Right section with folder icon and dropdown */}
      <div className="flex items-center gap-1">
        <button 
          className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded text-sm border border-gray-700"
          onClick={(e) => handleButtonClick(e, 'folder')}
        >
          {/* Custom folder icon to match the stacked rectangles style */}
          <div className="w-3 h-3 flex flex-col justify-center">
            <div className="w-3 h-1 bg-white rounded-sm mb-0.5"></div>
            <div className="w-3 h-1 bg-white rounded-sm"></div>
          </div>
          <span className="text-white text-sm">0</span>
        </button>
        <button onClick={(e) => handleIconClick(e, 'dropdown')}>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
