import { useState } from 'react';

import ScrollerComponent from 'pages/ScrollerComponent';
import styled from 'styled-components/macro';

import Router from './Router';
import GlobalStyle from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router></Router>
    </>
  );
}

export default App;
