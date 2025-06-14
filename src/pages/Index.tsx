
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import SectionHeader from '../components/mobile/SectionHeader';
import TokenCardList from '../components/mobile/TokenCardList';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <MobileHeader />
      <NavigationTabs />
      <SectionHeader />
      <TokenCardList />
    </div>
  );
};

export default Index;
