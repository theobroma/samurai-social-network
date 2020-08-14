import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './@utils/theme';
import { GlobalStyle } from './@utils/global';
import { AppContainer } from './#';
import { history, store, persistor } from './configureStore';

import * as serviceWorker from './serviceWorker';
// All styles
import './@assets/styles/index.scss';
import LoadingPage from './@components/UI/LoadingPage';
// Open Source typefaces
require('typeface-roboto');
require('typeface-gothic-a1');

const currentTheme = store.getState().layout.theme;
const rootEl = document.getElementById('root');

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <ThemeProvider
          theme={currentTheme === 'light' ? lightTheme : darkTheme}
        >
          <ConnectedRouter history={history}>
            <AppContainer />
          </ConnectedRouter>
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootEl,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
