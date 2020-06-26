import React from 'react';
import { useDispatch } from 'react-redux';
import { LoginPayload, startLoginProcess } from '../../@store/auth/sagas';
import LoginForm from '../@common/LoginForm/LoginForm';

export const Login: React.FC = () => {
  const dispatch = useDispatch();

  const callback = (payload: LoginPayload) => {
    dispatch(startLoginProcess(payload));
  };

  return (
    <>
      <LoginForm submitCallback={callback} />
    </>
  );
};
