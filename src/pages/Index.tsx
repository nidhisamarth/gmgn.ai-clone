
import React from 'react';
import GMGNHeader from '../components/mobile/GMGNHeader';
import SearchAndFilters from '../components/mobile/SearchAndFilters';
import GMGNTokenList from '../components/mobile/GMGNTokenList';
import BottomNav from '../components/mobile/BottomNav';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <GMGNHeader />
      <SearchAndFilters />
      <GMGNTokenList />
      <BottomNav />
    </div>
  );
};

export default Index;
