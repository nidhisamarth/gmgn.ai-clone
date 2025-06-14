
import React from 'react';
import { Search, X } from 'lucide-react';

interface SocialIconProps {
  type: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return <div className="w-4 h-4 bg-pink-500 rounded flex items-center justify-center">
          <span className="text-white text-xs">📷</span>
        </div>;
      case 'x':
        return <div className="w-4 h-4 bg-gray-700 rounded flex items-center justify-center">
          <X className="w-2 h-2 text-white" />
        </div>;
      case 'search':
        return <div className="w-4 h-4 bg-gray-700 rounded flex items-center justify-center">
          <Search className="w-2 h-2 text-gray-400" />
        </div>;
      case 'crown':
        return <div className="w-4 h-4 bg-yellow-500 rounded flex items-center justify-center">
          <span className="text-white text-xs">👑</span>
        </div>;
      default:
        return <div className="w-4 h-4 bg-gray-700 rounded flex items-center justify-center">
          <span className="text-gray-400 text-xs">•</span>
        </div>;
    }
  };

  return getIcon();
};

export default SocialIcon;
