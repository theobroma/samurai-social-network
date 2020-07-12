import React, { lazy, Suspense } from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { IRoute, ROUTES, ROLE, ROLES } from '../@types';
import LoadingPage from '../@components/UI/LoadingPage';
import { NestedRoute } from './@common/NestedRoute/NestedRoute';
import { useAllowedRoutes } from '../@utils/useAllowedRoutes';

const MUSIC = lazy(() => {
  return new Promise<any>((resolve) => {
    setTimeout(() => resolve(import('./Music')), 300);
  });
});

export const APP_MAIN_ROUTES: IRoute[] = [
  {
    access: [ROLES.USERS],
    component: MUSIC,
    path: ROUTES.MUSIC,
  },
  {
    access: [ROLES.USERS],
    component: lazy(() => import('./Dialogs')),
    path: ROUTES.DIALOGS,
  },
  {
    access: [ROLES.USERS],
    component: lazy(() => import('./Profile')),
    path: ROUTES.PROFILE,
  },
  {
    access: [ROLES.USERS],
    component: lazy(() => import('./Settings')),
    path: ROUTES.SETTINGS,
  },
  {
    access: [ROLES.USERS],
    component: lazy(() => import('./Users/')),
    path: ROUTES.USERS,
  },
  {
    access: [ROLES.GUESTS],
    component: lazy(() => import('./#login')),
    path: ROUTES.LOGIN,
  },
  {
    component: lazy(() => import('./#/Main')),
    path: ROUTES.ROOT,
  },
];

interface IAppProps {
  userRole: ROLE;
}

export const App: React.FC<IAppProps> = ({ userRole }) => {
  const preparedRoutes = useAllowedRoutes(APP_MAIN_ROUTES, userRole);

  return (
    <Suspense fallback={<LoadingPage />}>
      <Switch>
        <Redirect from="/index.html" to="/" exact />
        {preparedRoutes.map((route: IRoute) => (
          <NestedRoute key={route.path} {...route} />
        ))}
        <Redirect to="/login" />
      </Switch>
    </Suspense>
  );
};
