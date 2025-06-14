
import React from 'react';
import GMGNHeader from '../components/mobile/GMGNHeader';
import SearchAndFilters from '../components/mobile/SearchAndFilters';
import BottomNav from '../components/mobile/BottomNav';

const New = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <GMGNHeader />
      <SearchAndFilters />
      <div className="px-4 py-8 text-center pb-20">
        <h1 className="text-2xl font-bold mb-4">New Tokens</h1>
        <p className="text-gray-400">New token listings will appear here</p>
      </div>
      <BottomNav />
    </div>
  );
};

export default New;
