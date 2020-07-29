import { createAsyncAction, ActionType } from 'typesafe-actions';
import { ProfileType, IDType } from '../../@types';
import { APIResponseType } from '../../@api';

// Create the set of async actions
export const fetchProfileAsync = createAsyncAction(
  '@@profile/FETCH_PROFILE_REQUEST',
  '@@profile/FETCH_PROFILE_SUCCESS',
  '@@profile/FETCH_PROFILE_FAILURE',
)<IDType, ProfileType, Error>();

export const updateProfileAsync = createAsyncAction(
  '@@profile/UPDATE_PROFILE_REQUEST',
  '@@profile/UPDATE_PROFILE_SUCCESS',
  '@@profile/UPDATE_PROFILE_FAILURE',
)<ProfileType, APIResponseType, Error>();

export const fetchStatusAsync = createAsyncAction(
  '@@profile/FETCH_STATUS_REQUEST',
  '@@profile/FETCH_STATUS_SUCCESS',
  '@@profile/FETCH_STATUS_FAILURE',
)<IDType, string, Error>();

export const updateStatusAsync = createAsyncAction(
  '@@profile/UPDATE_STATUS_REQUEST',
  '@@profile/UPDATE_STATUS_SUCCESS',
  '@@profile/UPDATE_STATUS_FAILURE',
)<string, APIResponseType, Error>();
// TODO: SUCCESS "any type". Why not <APIResponseType<PhotosDataType>?
export const updateAvatarAsync = createAsyncAction(
  '@@profile/UPDATE_AVATAR_REQUEST',
  '@@profile/UPDATE_AVATAR_SUCCESS',
  '@@profile/UPDATE_AVATAR_FAILURE',
)<File, any, Error>();

export const actions = {
  fetchProfileAsync,
  updateProfileAsync,
  fetchStatusAsync,
  updateStatusAsync,
  updateAvatarAsync,
};

export type ProfileActionType = ActionType<typeof actions>;
