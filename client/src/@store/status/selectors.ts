import { RootState } from '..';

export const getStatus = (state: RootState) => {
  return state.status.status;
};
