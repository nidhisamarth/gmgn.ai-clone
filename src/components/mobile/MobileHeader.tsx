
import React from 'react';
import { ChevronDown } from 'lucide-react';

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
    <div className="bg-black px-4 py-3 flex items-center justify-between min-h-[56px] sticky top-0 z-50 border-b border-gray-800">
      {/* Left section with frog icon and SOL dropdown */}
      <div className="flex items-center gap-3">
        {/* Frog icon */}
        <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
          <img 
            src="/lovable-uploads/3446d744-cd08-43f6-beba-f962a9fb2d58.png" 
            alt="Frog icon" 
            className="w-8 h-8 object-contain"
          />
        </div>
        
        {/* SOL dropdown button */}
        <button 
          className="flex items-center gap-2 bg-gray-800 border border-gray-600 px-3 py-2 rounded-lg text-sm min-h-[36px] touch-manipulation hover:bg-gray-700 transition-colors"
          onClick={(e) => handleButtonClick(e, 'sol-dropdown')}
        >
          {/* SOL icon (purple circle with lines) */}
          <div className="w-4 h-4 relative flex-shrink-0">
            <div className="absolute inset-0 bg-purple-500 rounded-full"></div>
            <div className="absolute top-1 left-1 right-1 bottom-1 flex items-center justify-center">
              <div className="flex flex-col gap-0.5">
                <div className="w-2 h-0.5 bg-white rounded-full"></div>
                <div className="w-2 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <span className="text-white font-medium text-sm">SOL</span>
          <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
        </button>
      </div>

      {/* Center section with search and target icons */}
      <div className="flex items-center gap-4">
        {/* Search icon */}
        <button 
          onClick={(e) => handleIconClick(e, 'search')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-900 rounded transition-colors"
        >
          <div className="w-6 h-6 relative">
            <div className="absolute top-1 left-1 w-4 h-4 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-2 h-0.5 bg-white rounded-full transform rotate-45 origin-left"></div>
          </div>
        </button>
        
        {/* Target/crosshair icon */}
        <button 
          onClick={(e) => handleIconClick(e, 'target')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-900 rounded transition-colors"
        >
          <div className="w-6 h-6 relative">
            <div className="absolute inset-1 border-2 border-white rounded-full"></div>
            <div className="absolute inset-2 border border-white rounded-full"></div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-2 bg-white"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-white"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-0.5 bg-white"></div>
          </div>
        </button>
      </div>

      {/* Right section with file/folder button and settings dropdown */}
      <div className="flex items-center gap-2">
        {/* File/folder button with count */}
        <button 
          className="flex items-center gap-2 bg-gray-800 border border-gray-600 px-3 py-2 rounded-lg text-sm min-h-[36px] touch-manipulation hover:bg-gray-700 transition-colors"
          onClick={(e) => handleButtonClick(e, 'folder')}
        >
          {/* File/folder icon */}
          <div className="w-5 h-4 relative flex-shrink-0">
            <div className="absolute top-0 left-0 w-5 h-3 bg-white rounded-sm border-2 border-gray-300"></div>
            <div className="absolute top-1 left-1 w-1 h-0.5 bg-gray-400 rounded-sm"></div>
            <div className="absolute top-2 left-1 w-2 h-0.5 bg-gray-400 rounded-sm"></div>
          </div>
          <span className="text-white text-sm font-medium">0</span>
        </button>
        
        {/* Settings dropdown */}
        <button 
          onClick={(e) => handleIconClick(e, 'settings')}
          className="p-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-900 rounded transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
};

export default MobileHeader;
