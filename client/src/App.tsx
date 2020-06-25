import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainAppContainer from './#/#/Main';
import configureStore from './configureStore';

const store = configureStore();

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" render={() => <MainAppContainer />} />
          {/* <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route exact path="/users" render={() => <Users />} />
          <Route exact path="/music" render={() => <Music />} /> */}
          {/* <Route exact path="/settings" component={() => <Settings />} /> */}
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
