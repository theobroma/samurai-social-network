import { createReducer } from 'typesafe-actions';
import { ProfileType } from '../../@types';
import { actions, ProfileActionType } from './actions';

export const profileInitialState = {
  profile: {} as ProfileType,
  status: '',
};

export type profileStateType = typeof profileInitialState;

export const profileReducer = createReducer<
  profileStateType,
  ProfileActionType
>(profileInitialState, {
  // [CONSTANT]: (state) => {
  //   return {
  //     ...state,
  //   };
  // },
})
  .handleAction(
    actions.fetchProfileAsync.success,
    (state: profileStateType, action: ProfileActionType) => ({
      ...state,
      profile: action.payload,
    }),
  )
  .handleAction(
    actions.fetchStatusAsync.success,
    (state: profileStateType, action: ProfileActionType) => ({
      ...state,
      status: action.payload,
    }),
  );

export default profileReducer;
