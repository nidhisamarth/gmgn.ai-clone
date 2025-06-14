
import React from 'react';
import TokenCard from './TokenCard';
import { TokenData } from '../../types/token';
import { useRealTimeData } from '../../hooks/useRealTimeData';

const TokenCardList = () => {
  const tokens = useRealTimeData();

  return (
    <div className="bg-black px-4 pb-4 space-y-3">
      {tokens.map((token) => (
        <TokenCard key={token.id} token={token} />
      ))}
    </div>
  );
};

export default TokenCardList;
