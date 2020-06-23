import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MainAppContainer from './#/#/Main';
import configureStore from './configureStore';

const store = configureStore();

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <MainAppContainer />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
