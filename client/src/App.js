import React from 'react';
import OwlChat from './components/OwlChat';
import OwlHeader from './components/OwlHeader';
import OwlIntro from './components/OwlIntro';
import OwlJoin from './components/OwlJoin';
import OwlTemplate from './components/OwlTemplate';
import io from 'socket.io-client';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from './theme';
import GlobalFonts from './fonts/fonts';

const socket = io.connect('http://localhost:3000');

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

const App = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <GlobalFonts />
      <OwlTemplate>
        <OwlHeader />
        {/* <OwlIntro />
        <OwlJoin /> */}
        <OwlChat />
      </OwlTemplate>
    </ThemeProvider>
  );
};

export default App;
