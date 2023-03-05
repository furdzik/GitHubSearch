import React from 'react';
import { Provider } from 'react-redux';

import { Global, ThemeProvider } from '@emotion/react';

import { theme } from 'styles/theme';
import { GlobalStyles } from 'styles/global.styles';

import RoutesConfig from 'routes';

import store from 'features/store';

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <RoutesConfig />
      <Global styles={GlobalStyles} />
    </Provider>
  </ThemeProvider>
);

export default App;
