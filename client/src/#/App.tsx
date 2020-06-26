import React, { lazy } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainAppContainer from './#/Main';
import configureStore from '../configureStore';
import { IRoute, ROUTES } from '../@types';

const store = configureStore();

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    component: lazy(() => import('./Music')),
    path: ROUTES.MUSIC,
  },
  {
    component: lazy(() => import('./Dialogs')),
    path: ROUTES.DIALOGS,
  },
  {
    component: lazy(() => import('./Profile')),
    path: ROUTES.PROFILE,
  },
  {
    component: lazy(() => import('./Settings')),
    path: ROUTES.SETTINGS,
  },
  {
    component: lazy(() => import('./Users/')),
    path: ROUTES.ROOT,
  },
];

export default function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" render={() => <MainAppContainer />} />
          {/* <Route path="/profile/:userId?" render={() => <ProfileContainer />} /> */}
          {/* <Route exact path="/users" render={() => <Users />} /> */}
          {/* <Route exact path="/music" render={() => <Music />} /> */}
          {/* <Route exact path="/settings" component={() => <Settings />} /> */}
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
