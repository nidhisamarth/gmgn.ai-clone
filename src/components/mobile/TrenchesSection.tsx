import React, { useState } from 'react';
import { ChevronDown, Filter } from 'lucide-react';
import { useBuyAmount } from '../../contexts/BuyAmountContext';
import CustomizationPanel from './CustomizationPanel';
import DeveloperToolsPanel from './DeveloperToolsPanel';
import FilterPanel from './FilterPanel';
import TrendSettingsPanel from './TrendSettingsPanel';
import WalletPanel from './WalletPanel';

const TrenchesSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Trenches');
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [isDeveloperToolsOpen, setIsDeveloperToolsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isTrendSettingsOpen, setIsTrendSettingsOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);
  
  const { buyAmount, setBuyAmount, calculatePrice } = useBuyAmount();

  console.log('TrenchesSection render - isCustomizationOpen:', isCustomizationOpen, 'isDeveloperToolsOpen:', isDeveloperToolsOpen, 'isFilterOpen:', isFilterOpen, 'isTrendSettingsOpen:', isTrendSettingsOpen, 'isWalletOpen:', isWalletOpen);

  const dropdownOptions = [
    {
      name: 'Trenches',
      icon: (
        <img 
          src="/lovable-uploads/67520719-6b9f-429e-ac3d-5787cb090bfb.png" 
          alt="Military helmet" 
          className="w-5 h-5 filter brightness-75 hue-rotate-90"
          style={{ filter: 'brightness(0.6) sepia(1) saturate(2) hue-rotate(90deg)' }}
        />
      )
    },
    {
      name: 'Pump.fun',
      icon: (
        <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      name: 'Believe',
      icon: (
        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 2L8 6H4L6 2Z" fill="white" />
            <circle cx="6" cy="8.5" r="1.5" fill="white" />
          </svg>
        </div>
      )
    },
    {
      name: 'Boop',
      icon: (
        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="4" cy="4" r="1.5" fill="white" />
            <circle cx="8" cy="4" r="1.5" fill="white" />
            <path d="M3 8C3 8 4.5 10 6 10S9 8 9 8" stroke="white" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      )
    },
    {
      name: 'Launchlab',
      icon: (
        <div className="w-5 h-5 bg-purple-500 rounded flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L10 10M10 2L2 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      )
    },
    {
      name: 'Moonit',
      icon: (
        <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
          <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1L7 4H10L7.5 6.5L8.5 10L6 8L3.5 10L4.5 6.5L2 4H5L6 1Z" fill="white" />
          </svg>
        </div>
      )
    }
  ];

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (e: React.MouseEvent, optionName: string) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedOption(optionName);
    setIsDropdownOpen(false);
    console.log(`Selected: ${optionName}`);
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Icon clicked - no action taken');
  };

  const handleFilterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Filter icon clicked - opening filter panel');
    setIsFilterOpen(true);
  };

  const handleFilterClose = () => {
    console.log('Closing filter panel');
    setIsFilterOpen(false);
  };

  const handleTrendSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Trend settings icon clicked - opening trend settings panel');
    setIsTrendSettingsOpen(true);
  };

  const handleTrendSettingsClose = () => {
    console.log('Closing trend settings panel');
    setIsTrendSettingsOpen(false);
  };

  const handleWalletClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Wallet folder icon clicked - opening wallet panel');
    setIsWalletOpen(true);
  };

  const handleWalletClose = () => {
    console.log('Closing wallet panel');
    setIsWalletOpen(false);
  };

  const handleButtonClick = (e: React.MouseEvent, buttonType: string) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(`Button clicked: ${buttonType}`);
  };

  const handleHamburgerClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Hamburger menu clicked - opening customization panel');
    setIsCustomizationOpen(true);
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Home icon clicked - opening developer tools');
    setIsDeveloperToolsOpen(true);
  };

  const handleCustomizeClose = () => {
    console.log('Closing customization panel');
    setIsCustomizationOpen(false);
  };

  const handleDeveloperToolsClose = () => {
    console.log('Closing developer tools panel');
    setIsDeveloperToolsOpen(false);
  };

  const handleBuyAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setBuyAmount(value);
    console.log('Buy amount changed to:', value);
  };

  const selectedOptionData = dropdownOptions.find(option => option.name === selectedOption) || dropdownOptions[0];

  return (
    <>
      <div className="bg-black px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section with Trenches title and dropdown */}
          <div className="flex items-center gap-2 relative">
            {selectedOptionData.icon}
            <span className="text-white font-medium">{selectedOption}</span>
            <button onClick={handleDropdownToggle}>
              <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 border border-gray-700 rounded-lg shadow-lg z-50">
                <div className="py-2">
                  {dropdownOptions.map((option) => (
                    <button
                      key={option.name}
                      onClick={(e) => handleOptionSelect(e, option.name)}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-gray-800 transition-colors ${
                        selectedOption === option.name ? 'bg-gray-800 text-white' : 'text-gray-300'
                      }`}
                    >
                      {option.icon}
                      <span className="font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right section with Buy functionality - now more compact */}
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">$</span>
            </div>
            <span className="text-green-400 text-sm font-medium">Buy</span>
            <input
              type="number"
              value={buyAmount}
              onChange={handleBuyAmountChange}
              className="bg-black border border-gray-600 text-white text-xs w-12 px-1 py-1 rounded focus:outline-none focus:border-green-500"
              min="0"
              step="0.1"
            />
            <span className="text-gray-400 text-xs">≈${calculatePrice(buyAmount)}</span>
          </div>
        </div>
        
        {/* Filter Bar */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-3">
            {/* Hamburger menu icon - Opens customization panel */}
            <button 
              className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
              onClick={handleHamburgerClick}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="2" y1="4" x2="14" y2="4" stroke="white" strokeWidth="1" strokeLinecap="round" />
                <line x1="2" y1="8" x2="14" y2="8" stroke="white" strokeWidth="1" strokeLinecap="round" />
                <line x1="2" y1="12" x2="14" y2="12" stroke="white" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </button>
            
            {/* Home icon - Opens developer tools */}
            <button 
              className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
              onClick={handleHomeClick}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6l6-4 6 4v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" fill="white" />
                <path d="M6 16V10h4v6" stroke="black" strokeWidth="1" />
              </svg>
            </button>
            
            {/* Search icon as SVG */}
            <button 
              className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
              onClick={handleFilterClick}
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
                  onClick={handleWalletClick}
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
              
              {/* Filter icon replaces lightning bolt */}
              <button 
                className="w-7 h-7 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                onClick={handleFilterClick}
              >
                <Filter className="w-3 h-3 text-white" />
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
            
            {/* Settings gear icon - now opens trend settings */}
            <button 
              className="w-8 h-8 bg-black border border-gray-700 rounded flex items-center justify-center hover:bg-gray-900 transition-colors"
              onClick={handleTrendSettingsClick}
            >
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="2" stroke="#d1d5db" strokeWidth="1" fill="none" />
                <path d="M8 1v2M8 13v2M15 8h-2M3 8H1M13.36 2.64l-1.42 1.42M4.06 11.94l-1.42 1.42M13.36 13.36l-1.42-1.42M4.06 4.06L2.64 2.64" stroke="#d1d5db" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Customization Panel */}
      <CustomizationPanel 
        isOpen={isCustomizationOpen} 
        onClose={handleCustomizeClose} 
      />

      {/* Developer Tools Panel */}
      <DeveloperToolsPanel 
        isOpen={isDeveloperToolsOpen} 
        onClose={handleDeveloperToolsClose} 
      />

      {/* Filter Panel */}
      <FilterPanel 
        isOpen={isFilterOpen} 
        onClose={handleFilterClose} 
      />

      {/* Trend Settings Panel */}
      <TrendSettingsPanel 
        isOpen={isTrendSettingsOpen} 
        onClose={handleTrendSettingsClose} 
      />

      {/* Wallet Panel */}
      <WalletPanel 
        isOpen={isWalletOpen} 
        onClose={handleWalletClose} 
      />
    </>
  );
};

export default TrenchesSection;
