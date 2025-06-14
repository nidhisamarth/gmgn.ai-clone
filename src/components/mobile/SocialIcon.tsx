
import React from 'react';
import { Search, X } from 'lucide-react';

interface SocialIconProps {
  type: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return <div className="w-4 h-4 bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 rounded flex items-center justify-center">
          <div className="w-2 h-2 border border-white rounded-full"></div>
        </div>;
      case 'x':
        return <div className="w-4 h-4 bg-black rounded flex items-center justify-center">
          <X className="w-2.5 h-2.5 text-white" />
        </div>;
      case 'search':
        return <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
          <Search className="w-2.5 h-2.5 text-gray-300" />
        </div>;
      case 'crown':
        return <div className="w-4 h-4 bg-yellow-500 rounded flex items-center justify-center">
          <span className="text-white text-xs font-bold">♔</span>
        </div>;
      case 'website':
        return <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
          <span className="text-white text-xs">🌐</span>
        </div>;
      case 'telegram':
        return <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
          <span className="text-white text-xs">✈</span>
        </div>;
      default:
        return <div className="w-4 h-4 bg-gray-600 rounded flex items-center justify-center">
          <span className="text-gray-300 text-xs">•</span>
        </div>;
    }
  };

  return getIcon();
};

export default SocialIcon;
