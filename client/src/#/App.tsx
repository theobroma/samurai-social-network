import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import configureStore from '../configureStore';
import { IRoute, ROUTES } from '../@types';
import LoadingPage from '../@components/UI/LoadingPage';
import { NestedRoute } from './@common/NestedRoute/NestedRoute';

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
    path: ROUTES.USERS,
  },
  {
    component: lazy(() => import('./#/Main')),
    path: ROUTES.ROOT,
  },
];

export default function App() {
  const preparedRoutes = APP_MAIN_ROUTES;
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          {/* <Route exact path="/" render={() => <MainAppContainer />} /> */}
          {/* <Route path="/profile/:userId?" render={() => <ProfileContainer />} /> */}
          {/* <Route exact path="/users" render={() => <Users />} /> */}
          {/* <Route exact path="/music" render={() => <Music />} /> */}
          {/* <Route exact path="/settings" component={() => <Settings />} /> */}
          <Suspense fallback={<LoadingPage />}>
            <Switch>
              <Redirect from="/index.html" to="/" exact />
              {preparedRoutes.map((route: IRoute) => (
                <NestedRoute key={route.path} {...route} />
              ))}
              <Redirect to="/login" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
}
