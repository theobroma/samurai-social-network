import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { isAuthSelector } from '../@store/auth/selectors';
import { useAppSelector } from '../@store/configureStore';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isAuth = useAppSelector(isAuthSelector);
  const location = useLocation();

  if (!isAuth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
