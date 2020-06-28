import { createAction, createAsyncAction } from 'typesafe-actions';
import { SET_USER_ID, SET_AUTH_USER_DATA } from './constants';
import { ProfileAPI } from '../../@api/profile';
import { ProfileType } from '../../@types';

// Create the set of async actions
const fetchProfileAsync = createAsyncAction(
  'FETCH_PROFILE_REQUEST',
  'FETCH_PROFILE_SUCCESS',
  'FETCH_PROFILE_FAILURE',
)<string, ProfileType, Error>();

export const actions = {
  fetchProfileAsync,
};

// export const getProfile = (id: number | null): any => async (dispatch: any) => {
//   const data = await ProfileAPI.getProfile(id);
//   console.log(data);
//   // dispatch(profileActions.setProfile(data));
// };
