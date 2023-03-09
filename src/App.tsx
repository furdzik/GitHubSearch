import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { Global, ThemeProvider } from '@emotion/react';

import { theme, muiTheme } from 'styles/theme';
import { GlobalStyles } from 'styles/global.styles';

import RoutesConfig from 'routes';

import store from 'features/store';

const App = (): JSX.Element => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RoutesConfig />
        <Global styles={GlobalStyles} />
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>
);

export default App;
