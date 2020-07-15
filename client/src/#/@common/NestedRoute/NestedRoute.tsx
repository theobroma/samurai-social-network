import React, { useCallback, useEffect } from 'react';
import { Redirect, Route, RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRoute } from '../../../@types';
import NotFoundPage from '../NotFoundPage';
import { getUserId } from '../../../@store/auth/selectors';
import { startAuthenticationProcess } from '../../../@store/auth/sagas';

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
  layout: Layout,
}: IRoute & INestedRoute) => {
  const dispatch = useDispatch();

  const userId = useSelector(getUserId);

  useEffect(() => {
    if (userId) {
      dispatch(startAuthenticationProcess());
    }
  }, [dispatch, userId]);

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
    <Layout>
      <Route
        exact={exact}
        path={path}
        render={renderRoute}
        location={location}
      />
    </Layout>
  );
};
