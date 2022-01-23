import { RootState } from '../configureStore';

export const getStatus = (state: RootState) => {
  return state.status.status;
};
