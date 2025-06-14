
import React from 'react';
import { Copy } from 'lucide-react';
import { TokenData } from '../../types/token';
import SocialIcon from './SocialIcon';

interface TokenCardProps {
  token: TokenData;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
  const copyContract = () => {
    navigator.clipboard.writeText(token.contract);
  };

  return (
    <div className="bg-gray-900 rounded-lg p-4 border border-gray-800">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3 flex-1">
          {/* Profile Image with Verification Badge */}
          <div className="relative">
            <img 
              src={token.profileImage} 
              alt={token.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {token.verified && (
              <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center border-2 border-gray-900 ${
                token.verificationColor === 'green' ? 'bg-green-500' : 'bg-blue-500'
              }`}>
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          
          {/* Token Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold text-base">{token.name}</span>
              <span className="text-gray-400 text-sm">{token.displayName}</span>
            </div>
            
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-500 text-sm">{token.timestamp}</span>
              <span className="text-gray-400 text-sm font-mono">{token.contract}</span>
              <button onClick={copyContract} className="text-gray-400 hover:text-white">
                <Copy className="w-3 h-3" />
              </button>
              <div className="flex items-center gap-1">
                {token.socialIcons.map((icon, index) => (
                  <SocialIcon key={index} type={icon} />
                ))}
              </div>
            </div>
            
            {/* Stats Row - Combined on same line */}
            <div className="flex items-center gap-3 text-sm mb-2">
              <span className="text-pink-400">👥 {token.stats.percentage1}%</span>
              <span className="text-green-400">👥 {token.stats.percentage2}%</span>
              <span className="text-pink-400">🍭 Run</span>
              <span className="text-gray-400">👁 {token.stats.views}</span>
              {token.stats.runs > 0 && (
                <span className="text-gray-400">🏃 {token.stats.runs}</span>
              )}
              <span className="text-gray-400">V {token.volume} MC {token.marketCap}</span>
            </div>
          </div>
        </div>
        
        {/* Right Side Metrics */}
        <div className="flex flex-col items-end gap-1 text-sm ml-4">
          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center mb-2">
            <span className="text-white text-xs">⚡</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <span>👥 {token.communityCount}</span>
            <span>TX {token.txCount}</span>
          </div>
          {token.targetCount && (
            <div className="text-gray-400">🎯 {token.targetCount}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
