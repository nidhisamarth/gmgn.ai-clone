
import React from 'react';
import { ChevronDown } from 'lucide-react';

const TrenchesSection = () => {
  // Prevent any click events from bubbling up and causing navigation
  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Icons are just decorative, no navigation should happen
    console.log('Icon clicked - no action taken');
  };

  const handleFilterClick = (e: React.MouseEvent, filterType: string) => {
    e.preventDefault();
    e.stopPropagation();
    // These would handle filtering logic, not navigation
    console.log(`Filter clicked: ${filterType}`);
  };

  const handleButtonClick = (e: React.MouseEvent, buttonType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Button clicked: ${buttonType}`);
  };

  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left section with Trenches title and dropdown */}
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png" 
            alt="Military helmet" 
            className="w-5 h-5 filter brightness-75 hue-rotate-90"
            style={{ filter: 'brightness(0.6) sepia(1) saturate(2) hue-rotate(90deg)' }}
          />
          <span className="text-white font-medium">Trenches</span>
          <button onClick={handleIconClick}>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <button 
            className="w-7 h-7 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'menu')}
          >
            <span className="text-white text-sm">≡</span>
          </button>
          <button 
            className="w-7 h-7 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'home')}
          >
            <span className="text-white text-sm">🏠</span>
          </button>
          <button 
            className="w-7 h-7 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'list')}
          >
            <span className="text-white text-sm">≡</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <button 
              className="bg-gray-800 px-3 py-1 rounded text-xs text-white border border-gray-600 flex items-center gap-1"
              onClick={(e) => handleButtonClick(e, 'folder')}
            >
              <span>📁</span>
              <span>1</span>
            </button>
            <button onClick={handleIconClick} className="ml-1">
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
          </div>
          <button 
            className="w-7 h-7 bg-green-500 rounded flex items-center justify-center"
            onClick={(e) => handleButtonClick(e, 'lightning')}
          >
            <span className="text-white text-sm font-bold">⚡</span>
          </button>
          <button 
            className="bg-gray-800 px-3 py-1 rounded text-xs text-white flex items-center gap-1"
            onClick={(e) => handleButtonClick(e, 'filter')}
          >
            <span>≡</span>
            <span>0</span>
          </button>
          <div className="flex items-center">
            <button 
              className="bg-gray-800 px-3 py-1 rounded text-xs text-white border border-gray-600"
              onClick={(e) => handleButtonClick(e, 'p1')}
            >
              P1
            </button>
            <button onClick={handleIconClick} className="ml-1">
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
          </div>
          <button 
            className="w-7 h-7 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleButtonClick(e, 'settings')}
          >
            <span className="text-gray-400 text-sm">⚙</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrenchesSection;
