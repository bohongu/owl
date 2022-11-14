import React from 'react';
import OwlChat from './components/OwlChat';
import OwlHeader from './components/OwlHeader';
import OwlIntro from './components/OwlIntro';
import OwlJoin from './components/OwlJoin';
import OwlTemplate from './components/OwlTemplate';

const App = () => {
  return (
    <OwlTemplate>
      <OwlHeader />
      {/* <OwlIntro />
        <OwlJoin /> */}
      <OwlChat />
    </OwlTemplate>
  );
};

export default App;
