
import React from 'react';
import { Search, Target, ChevronDown, Folder } from 'lucide-react';

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
        <button 
          className="flex items-center gap-1"
          onClick={(e) => handleButtonClick(e, 'sol-dropdown')}
        >
          <span className="text-white font-medium">SOL</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      {/* Center section with search and target icons */}
      <div className="flex items-center gap-4">
        <button onClick={(e) => handleIconClick(e, 'search')}>
          <Search className="w-6 h-6 text-white" />
        </button>
        <button onClick={(e) => handleIconClick(e, 'target')}>
          <Target className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Right section with folder and dropdown */}
      <div className="flex items-center gap-2">
        <button 
          className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded border border-gray-600"
          onClick={(e) => handleButtonClick(e, 'folder')}
        >
          <Folder className="w-4 h-4 text-white" />
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
