import React from 'react';
import OwlChat from './components/OwlChat';
import OwlIntro from './components/OwlIntro';
import OwlJoin from './components/OwlJoin';
import OwlTemplate from './components/OwlTemplate';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalFonts from './fonts/fonts';
import OwlRooms from './components/OwlRooms';

const App = () => {
  const { join, room, chat } = useSelector((state) => state.start);

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <OwlTemplate>
        {join && (
          <>
            <OwlIntro />
            <OwlJoin />
          </>
        )}
        {room && <OwlRooms />}
        {chat && <OwlChat />}
      </OwlTemplate>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: #3f3f3f;
  }

  button {
    cursor: pointer;
}`;

export default App;
