import { createReducer } from 'typesafe-actions';
import { SET_USER_ID, SET_AUTH_USER_DATA } from './constants';
import { PostType, ProfileType } from '../../@types';
// import { ClientsListType, ClientsActionType } from './types';

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

export const profileReducer = createReducer<any, any>(profileInitialState, {
  [SET_USER_ID]: (state) => {
    return {
      ...state,
    };
  },
  [SET_AUTH_USER_DATA]: (state) => {
    return {
      ...state,
    };
  },
});

export default profileReducer;
