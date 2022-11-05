import type { RootState } from '../configureStore';

export const statusSelector = (state: RootState) => {
  return state.status.status;
};
