
import React from 'react';
import { Star } from 'lucide-react';

interface TokenCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  volume: string;
  marketCap: string;
  age: string;
  icon: string;
  isPositive: boolean;
}

const GMGNTokenCard: React.FC<TokenCardProps> = ({
  name,
  symbol,
  price,
  change,
  changePercent,
  volume,
  marketCap,
  age,
  icon,
  isPositive
}) => {
  return (
    <div className="bg-gray-800 rounded-xl p-4 mx-4 mb-3">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <div>
              <div className="text-white font-medium text-lg">{name}</div>
              <div className="text-gray-400 text-sm">{symbol}</div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
            {age}
          </div>
          <div className="text-right">
            <div className="text-white font-medium text-lg">{price}</div>
            <div className={`text-sm flex items-center gap-1 ${
              isPositive ? 'text-green-500' : 'text-red-500'
            }`}>
              <span className="text-xs">{isPositive ? '↗' : '↘'}</span>
              <span>{changePercent}</span>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-gray-700 mb-3" />

      <div className="flex justify-between">
        <div>
          <div className="text-gray-400 text-sm mb-1">Volume</div>
          <div className="text-white font-medium">{volume}</div>
        </div>
        <div className="text-right">
          <div className="text-gray-400 text-sm mb-1">Market Cap</div>
          <div className="text-white font-medium">{marketCap}</div>
        </div>
      </div>
    </div>
  );
};

export default GMGNTokenCard;
