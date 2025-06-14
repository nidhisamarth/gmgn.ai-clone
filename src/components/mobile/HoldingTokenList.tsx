
import React from 'react';

const HoldingTokenList = () => {
  // Sample data - in real app this would come from API
  const holdings = [];

  if (holdings.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center py-16">
        <div className="w-16 h-16 mb-4">
          <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
            <span className="text-gray-500 text-2xl">💰</span>
          </div>
        </div>
        <span className="text-gray-400 text-sm mb-2">No Holdings Yet</span>
        <span className="text-gray-500 text-xs text-center px-8">
          Your token holdings will appear here once you make your first purchase
        </span>
      </div>
    );
  }

  return (
    <div className="flex-1">
      {/* Holdings list would go here */}
    </div>
  );
};

export default HoldingTokenList;
