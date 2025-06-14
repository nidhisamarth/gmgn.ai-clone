
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
    <div className="bg-black px-4 py-3 flex items-center justify-between min-h-[56px] sticky top-0 z-50">
      {/* Left section with frog icon and SOL dropdown */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/3446d744-cd08-43f6-beba-f962a9fb2d58.png" 
            alt="Frog icon" 
            className="w-8 h-8"
          />
        </div>
        <button 
          className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded text-sm min-h-[36px] touch-manipulation"
          onClick={(e) => handleButtonClick(e, 'sol-dropdown')}
        >
          <span className="text-white font-medium text-sm">SOL</span>
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </button>
      </div>

      {/* Center section with search and target icons */}
      <div className="flex items-center gap-6">
        <button 
          onClick={(e) => handleIconClick(e, 'search')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
        <button 
          onClick={(e) => handleIconClick(e, 'target')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <Target className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Right section with folder icon and dropdown */}
      <div className="flex items-center gap-2">
        <button 
          className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded text-sm border border-gray-700 min-h-[36px] touch-manipulation"
          onClick={(e) => handleButtonClick(e, 'folder')}
        >
          {/* Custom folder icon to match the stacked rectangles style */}
          <div className="w-4 h-4 flex flex-col justify-center flex-shrink-0">
            <div className="w-4 h-1 bg-white rounded-sm mb-0.5"></div>
            <div className="w-4 h-1 bg-white rounded-sm"></div>
          </div>
          <span className="text-white text-sm">0</span>
        </button>
        <button 
          onClick={(e) => handleIconClick(e, 'dropdown')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
