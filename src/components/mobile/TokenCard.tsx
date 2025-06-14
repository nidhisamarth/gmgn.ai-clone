
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
    <div className="bg-slate-800 rounded-lg p-4">
      {/* Header Row */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3">
          {/* Profile Image with Verification Badge */}
          <div className="relative">
            <img 
              src={token.profileImage} 
              alt={token.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            {token.verified && (
              <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
                token.verificationColor === 'green' ? 'bg-green-400' : 'bg-blue-400'
              }`}>
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          
          {/* Token Info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-white font-bold">{token.name}</span>
              <span className="text-gray-400 text-sm">{token.displayName}</span>
            </div>
            <div className="text-gray-400 text-sm mb-2">{token.timestamp}</div>
            
            {/* Contract Address */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-gray-400 text-sm font-mono">{token.contract}</span>
              <button onClick={copyContract} className="text-gray-400 hover:text-white">
                <Copy className="w-3 h-3" />
              </button>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-2 mb-3">
              {token.socialIcons.map((icon, index) => (
                <SocialIcon key={index} type={icon} />
              ))}
            </div>
            
            {/* Stats Row */}
            <div className="flex items-center gap-3 text-sm mb-3">
              <span className="text-green-400">{token.stats.percentage1}%</span>
              <span className="text-gray-400">👥</span>
              <span className="text-green-400">{token.stats.percentage2}%</span>
              <span className="text-gray-400">🏃 Run</span>
              <span className="text-gray-400">👁️ {token.stats.views}</span>
              {token.stats.runs > 0 && (
                <>
                  <span className="text-gray-400">🏃</span>
                  <span className="text-gray-400">{token.stats.runs}</span>
                </>
              )}
            </div>
            
            {/* Volume & Market Cap */}
            <div className="text-gray-400 text-sm">
              V {token.volume} MC {token.marketCap}
            </div>
          </div>
        </div>
        
        {/* Right Side Metrics */}
        <div className="flex flex-col items-end gap-1 text-sm">
          <div className="flex items-center gap-1">
            {token.lightning && <span className="text-yellow-400">⚡</span>}
            <span className="text-gray-400">👥 {token.communityCount}</span>
            {token.targetCount && (
              <span className="text-gray-400">🎯 {token.targetCount}</span>
            )}
          </div>
          <div className="text-gray-400">TX {token.txCount}</div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
