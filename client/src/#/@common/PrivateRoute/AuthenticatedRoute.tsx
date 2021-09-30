import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { isAuthSelector } from '../../../@store/auth/selectors';

export type AuthenticatedRouteProps = {
  onlyPublic?: boolean;
} & RouteProps;

const AuthenticatedRoute: FC<AuthenticatedRouteProps> = ({
  children,
  onlyPublic = false,
  ...routeProps
}) => {
  const isAuth = useSelector(isAuthSelector);
  return (
    <Route
      {...routeProps}
      render={() => {
        // if route public - render it anyway
        if (onlyPublic) {
          return children;
        }
        // else check auth. redirect to loginPage if does not exist
        return isAuth ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default AuthenticatedRoute;
