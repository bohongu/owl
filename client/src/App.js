import React from 'react';
import OwlHeader from './components/OwlHeader';
import OwlIntro from './components/OwlIntro';
import OwlJoin from './components/OwlJoin';
import OwlTemplate from './components/OwlTemplate';

const App = () => {
  return (
    <>
      <OwlTemplate>
        <OwlHeader />
        <OwlIntro />
        <OwlJoin />
      </OwlTemplate>
    </>
  );
};

export default App;
