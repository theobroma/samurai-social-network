import React from 'react';
import { useSelector } from 'react-redux';
import { getUserRole } from '../@store/auth/selectors';
import { App } from './App';

export const AppContainer: React.FC = () => {
  const userRole = useSelector(getUserRole);
  return <App userRole={userRole} />;
};
