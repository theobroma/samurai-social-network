import * as React from 'react';
import { Provider } from 'react-redux';
import MainAppContainer from './#/#/Main';
import configureStore from './configureStore';

const store = configureStore();

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <MainAppContainer />
      </Provider>
    </React.StrictMode>
  );
}
