
import React from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

const SectionHeader = () => {
  return (
    <div className="bg-black px-4 py-4 space-y-4">
      {/* Trenches Header */}
      <div className="flex items-center gap-2">
        <span className="text-xl">🌍</span>
        <span className="text-white font-medium">Trenches</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      {/* Filter Bar */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-gray-700 rounded"></div>
          <div className="w-6 h-6 bg-gray-700 rounded"></div>
          <div className="w-6 h-6 bg-gray-700 rounded"></div>
          <div className="w-6 h-6 bg-gray-700 rounded"></div>
        </div>
        <div className="bg-gray-700 px-2 py-1 rounded text-xs text-white">P1</div>
      </div>
      
      {/* New Creations Header */}
      <div className="flex items-center gap-2">
        <span className="text-xl">🚀</span>
        <span className="text-white font-medium">New Creations</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      {/* Search Bar */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input 
            placeholder="Search tokens..." 
            className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
          />
        </div>
        <Button variant="outline" className="bg-gray-800 border-gray-700 text-white">
          Filter
        </Button>
      </div>
    </div>
  );
};

export default SectionHeader;
