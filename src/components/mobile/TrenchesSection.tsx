
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
          {/* Hamburger menu icon as SVG */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleFilterClick(e, 'menu')}
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="2" y1="4" x2="14" y2="4" stroke="white" strokeWidth="1" strokeLinecap="round" />
              <line x1="2" y1="8" x2="14" y2="8" stroke="white" strokeWidth="1" strokeLinecap="round" />
              <line x1="2" y1="12" x2="14" y2="12" stroke="white" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </button>
          
          {/* Home icon as SVG */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleFilterClick(e, 'home')}
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6l6-4 6 4v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="white" />
              <path d="M6 16V10h4v6" stroke="black" strokeWidth="1" />
            </svg>
          </button>
          
          {/* Search icon as SVG */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleFilterClick(e, 'search')}
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6" cy="6" r="4" stroke="white" strokeWidth="1" fill="none" />
              <path d="10 10l3 3" stroke="white" strokeWidth="1" strokeLinecap="round" />
            </svg>
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
                {/* Folder icon as SVG */}
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 3h2l1-1h6v7H1V3z" fill="white" />
                </svg>
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
              {/* Lightning bolt icon as SVG */}
              <svg className="w-3 h-4" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 0L3 8h3l-1 8 4-8H6l1-8z" fill="white" />
              </svg>
            </button>
            
            <button 
              className="bg-black border border-gray-600 px-2 py-1 rounded text-xs text-white flex items-center gap-1 hover:bg-gray-900 transition-colors"
              onClick={(e) => handleButtonClick(e, 'filter')}
            >
              {/* Filter icon as SVG */}
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="1" y1="3" x2="8" y2="3" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round" />
                <line x1="1" y1="6" x2="7" y2="6" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round" />
                <line x1="1" y1="9" x2="6" y2="9" stroke="#06b6d4" strokeWidth="1" strokeLinecap="round" />
              </svg>
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
          
          {/* Settings gear icon as SVG */}
          <button 
            className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
            onClick={(e) => handleButtonClick(e, 'settings')}
          >
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="8" r="2" stroke="#d1d5db" strokeWidth="1" fill="none" />
              <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.36 2.64l-1.42 1.42M4.06 11.94l-1.42 1.42M13.36 13.36l-1.42-1.42M4.06 4.06L2.64 2.64" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrenchesSection;
