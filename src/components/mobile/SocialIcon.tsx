
import React from 'react';
import { Search, X } from 'lucide-react';

interface SocialIconProps {
  type: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ type }) => {
  const getIcon = () => {
    switch (type) {
      case 'instagram':
        return <span className="text-pink-400">📷</span>;
      case 'x':
        return <X className="w-3 h-3 text-gray-400" />;
      case 'search':
        return <Search className="w-3 h-3 text-gray-400" />;
      case 'crown':
        return <span className="text-yellow-400">👑</span>;
      default:
        return <span className="text-gray-400">•</span>;
    }
  };

  return (
    <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
      {getIcon()}
    </div>
  );
};

export default SocialIcon;
