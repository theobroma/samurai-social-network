import { createReducer } from 'typesafe-actions';
import { ProfileType } from '../../@types';
import { actions, ProfileAction } from './actions';

const profileInitialState = {
  profile: {
    userId: null,
    lookingForAJob: null,
    lookingForAJobDescription: null,
    fullName: null,
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: '',
    },
    photos: {
      small: null,
      large: null,
    },
  },
  // profile: null as null | ProfileType,
  status: '',
};

export type InitialStateType = typeof profileInitialState;

export const profileReducer = createReducer<InitialStateType, any>(
  profileInitialState,
  {
    // [CONSTANT]: (state) => {
    //   return {
    //     ...state,
    //   };
    // },
  },
)
  .handleAction(
    actions.fetchProfileAsync.success,
    (state: InitialStateType, action: any) => ({
      ...state,
      profile: action.payload,
    }),
  )
  .handleAction(
    actions.fetchStatusAsync.success,
    (state: InitialStateType, action: any) => ({
      ...state,
      status: action.payload,
    }),
  );

export default profileReducer;
