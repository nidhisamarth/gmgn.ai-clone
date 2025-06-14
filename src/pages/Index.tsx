
import React from 'react';
import MobileHeader from '../components/mobile/MobileHeader';
import NavigationTabs from '../components/mobile/NavigationTabs';
import TrenchesSection from '../components/mobile/TrenchesSection';
import NewCreationsSection from '../components/mobile/NewCreationsSection';
import TokenList from '../components/mobile/TokenList';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <MobileHeader />
      <NavigationTabs />
      <TrenchesSection />
      <NewCreationsSection />
      <TokenList />
    </div>
  );
};

export default Index;
