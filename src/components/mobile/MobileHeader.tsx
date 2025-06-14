
import React from 'react';
import { Search, Settings, ChevronDown } from 'lucide-react';

const MobileHeader = () => {
  return (
    <div className="bg-black text-white">
      {/* Status Bar */}
      <div className="flex justify-between items-center px-4 py-1 text-sm">
        <div className="flex items-center gap-1">
          <span className="font-medium">12:39</span>
          <div className="w-4 h-2 bg-gray-600 rounded-sm"></div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-white rounded-full"></div>
            <div className="w-1 h-3 bg-gray-400 rounded-full"></div>
          </div>
          <div className="w-4 h-2 bg-white rounded-sm ml-1"></div>
          <div className="w-6 h-3 bg-green-400 rounded-sm"></div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="flex justify-between items-center px-4 py-3">
        {/* Left - SOL Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xs">⚡</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-white font-medium">SOL</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        
        {/* Center - Search & Settings */}
        <div className="flex items-center gap-4">
          <Search className="w-5 h-5 text-gray-400" />
          <Settings className="w-5 h-5 text-gray-400" />
        </div>
        
        {/* Right - Wallet */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded">
            <div className="w-4 h-4 bg-gray-600 rounded"></div>
            <span className="text-white text-sm">0</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
