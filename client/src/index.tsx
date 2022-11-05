import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import LoadingPage from './@components/UI/LoadingPage';
import { AppContainer } from './@routes/AppContainer';
import { logoutTC } from './@store/auth/slice';
import { persistor, store } from './@store/configureStore';
import { GlobalStyle } from './@utils/global';
import { darkTheme, lightTheme } from './@utils/theme';
import { instance } from './@api';
import reportWebVitals from './reportWebVitals';

// All styles
import './@assets/styles/index.scss';
// Open Source fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Gothic-a1
import '@fontsource/gothic-a1'; // Defaults to weight 400.

const currentTheme = store.getState().layout.theme;
const rootEl = document.getElementById('root');

/**
 * Interceptor to automatically logout current user if any API call returns 401
 */
instance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (Number(err?.response?.status) === 401) {
      store.dispatch(logoutTC());
      // console.log('err 401');
    }
    // debugger;
    return Promise.reject(err);
  },
);

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<LoadingPage />} persistor={persistor}>
        <ThemeProvider
          theme={currentTheme === 'light' ? lightTheme : darkTheme}
        >
          <AppContainer />
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
