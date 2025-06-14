
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
          {/* Updated hamburger menu icon */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleFilterClick(e, 'menu')}
          >
            <div className="flex flex-col gap-1">
              <div className="w-4 h-0.5 bg-white rounded"></div>
              <div className="w-4 h-0.5 bg-white rounded"></div>
              <div className="w-4 h-0.5 bg-white rounded"></div>
            </div>
          </button>
          
          {/* Updated home icon */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleFilterClick(e, 'home')}
          >
            <div className="relative w-4 h-4">
              <div className="absolute bottom-0 left-0 w-4 h-2 bg-white"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-white" style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomColor: 'white', borderBottomWidth: '8px', borderLeftWidth: '8px', borderRightWidth: '8px' }}></div>
            </div>
          </button>
          
          {/* Updated search icon */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleFilterClick(e, 'search')}
          >
            <div className="w-4 h-4 relative">
              <div className="absolute top-0 left-0 w-3 h-3 border border-white rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-1.5 h-0.5 bg-white rounded-full transform rotate-45 origin-left"></div>
            </div>
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Middle grouped section with dark background */}
          <div className="flex items-center bg-black border border-gray-700 rounded-lg px-2 py-1 gap-2">
            <div className="flex items-center">
              <button 
                className="bg-black border border-gray-600 px-2 py-1 rounded text-xs text-white flex items-center gap-1 hover:bg-gray-900 transition-colors"
                onClick={(e) => handleButtonClick(e, 'folder')}
              >
                {/* Updated folder icon */}
                <div className="w-3 h-3 relative">
                  <div className="absolute top-0 left-0 w-3 h-2 bg-gray-400 rounded-sm"></div>
                  <div className="absolute top-0.5 left-0 w-3 h-2 bg-white rounded-sm"></div>
                </div>
                <span>1</span>
              </button>
              <button onClick={handleIconClick} className="ml-1">
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </button>
            </div>
            
            <button 
              className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
              onClick={(e) => handleButtonClick(e, 'lightning')}
            >
              {/* Updated lightning bolt icon */}
              <div className="w-3 h-4 relative">
                <div className="absolute top-0 left-1 w-0 h-0 border-l-2 border-r-1 border-b-2 border-transparent border-b-white" style={{ borderLeftWidth: '4px', borderRightWidth: '2px', borderBottomWidth: '8px' }}></div>
                <div className="absolute bottom-0 right-1 w-0 h-0 border-l-1 border-r-2 border-t-2 border-transparent border-t-white" style={{ borderLeftWidth: '2px', borderRightWidth: '4px', borderTopWidth: '8px' }}></div>
              </div>
            </button>
            
            <button 
              className="bg-black border border-gray-600 px-2 py-1 rounded text-xs text-white flex items-center gap-1 hover:bg-gray-900 transition-colors"
              onClick={(e) => handleButtonClick(e, 'filter')}
            >
              {/* Updated filter icon */}
              <div className="flex flex-col gap-0.5">
                <div className="w-3 h-0.5 bg-cyan-400 rounded"></div>
                <div className="w-2.5 h-0.5 bg-cyan-400 rounded"></div>
                <div className="w-2 h-0.5 bg-cyan-400 rounded"></div>
              </div>
              <span>0</span>
            </button>
          </div>
          
          <div className="flex items-center">
            <button 
              className="bg-black border border-gray-600 px-3 py-1 rounded text-xs text-white hover:bg-gray-900 transition-colors"
              onClick={(e) => handleButtonClick(e, 'p1')}
            >
              P1
            </button>
            <button onClick={handleIconClick} className="ml-1">
              <ChevronDown className="w-3 h-3 text-gray-400" />
            </button>
          </div>
          
          {/* Updated settings gear icon */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleButtonClick(e, 'settings')}
          >
            <div className="w-4 h-4 relative">
              <div className="absolute inset-1 w-2 h-2 border border-gray-300 rounded-full"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-300 rounded"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-300 rounded"></div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-0.5 bg-gray-300 rounded"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-0.5 bg-gray-300 rounded"></div>
              <div className="absolute top-0.5 right-0.5 w-0.5 h-0.5 bg-gray-300 rounded transform rotate-45"></div>
              <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-gray-300 rounded transform rotate-45"></div>
              <div className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-gray-300 rounded transform rotate-45"></div>
              <div className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-gray-300 rounded transform rotate-45"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrenchesSection;
