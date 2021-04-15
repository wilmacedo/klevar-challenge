import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import { Home } from './pages'
import { def } from './styles/themes';

ReactDOM.render((
  <ThemeProvider theme={def}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
), document.getElementById('root'));
