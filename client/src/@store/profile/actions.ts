import { createAsyncAction, ActionType } from 'typesafe-actions';
import { ProfileType } from '../../@types';

// Create the set of async actions
export const fetchProfileAsync = createAsyncAction(
  '@@profile/FETCH_PROFILE_REQUEST',
  '@@profile/FETCH_PROFILE_SUCCESS',
  '@@profile/FETCH_PROFILE_FAILURE',
)<number | null, ProfileType, Error>();

export const fetchStatusAsync = createAsyncAction(
  '@@profile/FETCH_STATUS_REQUEST',
  '@@profile/FETCH_STATUS_SUCCESS',
  '@@profile/FETCH_STATUS_FAILURE',
)<any, string, Error>();

export const updateStatusAsync = createAsyncAction(
  '@@profile/UPDATE_STATUS_REQUEST',
  '@@profile/UPDATE_STATUS_SUCCESS',
  '@@profile/UPDATE_STATUS_FAILURE',
)<string, any, Error>();

export const actions = {
  fetchProfileAsync,
  fetchStatusAsync,
  updateStatusAsync,
};

export type ProfileActionType = ActionType<typeof actions>;
