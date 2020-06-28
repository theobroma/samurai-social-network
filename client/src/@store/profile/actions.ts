import { createAsyncAction, ActionType } from 'typesafe-actions';
import { ProfileType } from '../../@types';

// Create the set of async actions
export const fetchProfileAsync = createAsyncAction(
  'FETCH_PROFILE_REQUEST',
  'FETCH_PROFILE_SUCCESS',
  'FETCH_PROFILE_FAILURE',
)<number | null, ProfileType, Error>();

export const actions = {
  fetchProfileAsync,
};

export type ProfileAction = ActionType<typeof actions>;
