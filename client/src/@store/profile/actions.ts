import { createAsyncAction, ActionType } from 'typesafe-actions';
import { ProfileType } from '../../@types';

// Create the set of async actions
export const fetchProfileAsync = createAsyncAction(
  'FETCH_PROFILE_REQUEST',
  'FETCH_PROFILE_SUCCESS',
  'FETCH_PROFILE_FAILURE',
)<number | null, ProfileType, Error>();

export const fetchStatusAsync = createAsyncAction(
  'FETCH_STATUS_REQUEST',
  'FETCH_STATUS_SUCCESS',
  'FETCH_STATUS_FAILURE',
)<any, string, Error>();

export const updateStatusAsync = createAsyncAction(
  'UPDATE_STATUS_REQUEST',
  'UPDATE_STATUS_SUCCESS',
  'UPDATE_STATUS_FAILURE',
)<string, any, Error>();

export const actions = {
  fetchProfileAsync,
  fetchStatusAsync,
  updateStatusAsync,
};

export type ProfileAction = ActionType<typeof actions>;
