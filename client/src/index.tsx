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

import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
