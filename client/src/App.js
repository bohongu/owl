import React, { useEffect } from 'react';
import OwlChat from './components/OwlChat';
import OwlHeader from './components/OwlHeader';
import OwlIntro from './components/OwlIntro';
import OwlJoin from './components/OwlJoin';
import OwlTemplate from './components/OwlTemplate';
import io from 'socket.io-client';
import { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import GlobalFonts from './fonts/fonts';
import OwlRooms from './components/OwlRooms';

const socket = io.connect('http://localhost:3001');

const App = () => {
  const { join, room, chat } = useSelector((state) => state.start);

  return (
    <>
      <GlobalStyle />
      <GlobalFonts />
      <OwlTemplate>
        <OwlHeader />
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
