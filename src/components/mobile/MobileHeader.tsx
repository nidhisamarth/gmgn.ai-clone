
import React from 'react';
import { Search, Settings, Wallet, ChevronDown } from 'lucide-react';

const MobileHeader = () => {
  return (
    <div className="bg-black text-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-1 text-sm">
        <span className="font-medium">12:39</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-6 h-3 bg-white rounded-sm"></div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left - SOL Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-green-400 rounded-sm flex items-center justify-center">
            <span className="text-black font-bold text-xs">SOL</span>
          </div>
          <span className="text-white font-medium">SOL</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        
        {/* Center - Search & Settings */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-400" />
          <Settings className="w-5 h-5 text-gray-400" />
        </div>
        
        {/* Right - Wallet */}
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-gray-400" />
          <span className="text-white">0</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
