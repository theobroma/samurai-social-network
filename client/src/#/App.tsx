import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import configureStore from '../configureStore';
import { IRoute, ROUTES } from '../@types';
import LoadingPage from '../@components/UI/LoadingPage';
import { NestedRoute } from './@common/NestedRoute/NestedRoute';

const store = configureStore();

const MUSIC = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => resolve(import('./Music')), 300);
  });
});

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    component: MUSIC,
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
    component: lazy(() => import('./#login')),
    path: ROUTES.LOGIN,
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
