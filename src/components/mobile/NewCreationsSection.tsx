
import React from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';

const NewCreationsSection = () => {
  return (
    <div className="bg-black px-4 py-3 space-y-3">
      {/* New Creations Header */}
      <div className="flex items-center gap-2">
        <img 
          src="/lovable-uploads/31ef9bb6-a6cf-451e-acb0-51abe9686e18.png" 
          alt="Leaf icon" 
          className="w-5 h-5"
        />
        <span className="text-white font-medium">New Creations</span>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </div>
      
      {/* Search and Filter */}
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            placeholder="Search" 
            className="w-full pl-10 pr-4 py-2 bg-gray-900 border border-gray-700 text-white placeholder-gray-400 rounded-lg text-sm"
          />
        </div>
        <button className="bg-gray-900 border border-gray-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-1">
          <Filter className="w-4 h-4" />
          <span>Filter</span>
        </button>
      </div>
    </div>
  );
};

export default NewCreationsSection;
