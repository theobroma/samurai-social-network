import { createReducer } from 'typesafe-actions';
import { ProfileType } from '../../@types';
import { actions, ProfileAction } from './actions';

const profileInitialState: ProfileType = {
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
};

export const profileReducer = createReducer(profileInitialState, {
  // [CONSTANT]: (state) => {
  //   return {
  //     ...state,
  //   };
  // },
}).handleAction(
  actions.fetchProfileAsync.success,
  (state: ProfileType, action: any) => ({
    ...state,
    ...action.payload,
  }),
);

export default profileReducer;
