import React, { useCallback } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { IRoute } from '../../../@types';
import NotFoundPage from '../NotFoundPage';

interface INestedRoute {
  location?: any;
}

export const NestedRoute = ({
  component: RouteComponent,
  exact,
  path,
  redirect,
  routes,
  location,
  ...rest
}: IRoute & INestedRoute) => {
  const renderRoute = useCallback(
    (props: RouteComponentProps<any>) => {
      if (!RouteComponent) {
        return <NotFoundPage />;
      }

      return (
        <RouteComponent exact={exact} path={path} routes={routes} {...props} />
      );
    },
    [RouteComponent, exact, path, routes],
  );

  if (redirect) {
    return <Redirect to={redirect} />;
  }

  return (
    <Route exact={exact} path={path} render={renderRoute} location={location} />
  );
};
