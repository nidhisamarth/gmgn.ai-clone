
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

  return (
    <div className="bg-black px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Left section with Trenches title and dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🏔️</span>
          <span className="text-white font-medium">Trenches</span>
          <button onClick={handleIconClick}>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Filter Bar */}
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <button 
            className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'menu')}
          >
            <span className="text-white text-xs">≡</span>
          </button>
          <button 
            className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'home')}
          >
            <span className="text-white text-xs">🏠</span>
          </button>
          <button 
            className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'list')}
          >
            <span className="text-white text-xs">≡</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button 
            className="bg-gray-800 px-2 py-1 rounded text-xs text-white border border-gray-600 flex items-center gap-1"
            onClick={(e) => handleFilterClick(e, 'folder')}
          >
            <span>📁</span>
            <span>1</span>
          </button>
          <button 
            className="w-6 h-6 bg-green-500 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'lightning')}
          >
            <span className="text-white text-xs font-bold">⚡</span>
          </button>
          <button 
            className="bg-gray-800 px-2 py-1 rounded text-xs text-white flex items-center gap-1"
            onClick={(e) => handleFilterClick(e, 'filter')}
          >
            <span>≡</span>
            <span>0</span>
          </button>
          <button 
            className="bg-gray-800 px-2 py-1 rounded text-xs text-white"
            onClick={(e) => handleFilterClick(e, 'p1')}
          >
            P1
          </button>
          <button 
            className="w-6 h-6 bg-gray-700 rounded flex items-center justify-center"
            onClick={(e) => handleFilterClick(e, 'settings')}
          >
            <span className="text-gray-400 text-xs">⚙</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrenchesSection;
