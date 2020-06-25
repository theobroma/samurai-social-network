import { createReducer } from 'typesafe-actions';
import { SET_USER_ID, SET_AUTH_USER_DATA } from './constants';
import { PostType, ProfileType } from '../../@types';
// import { ClientsListType, ClientsActionType } from './types';

const profileInitialState = {
  posts: [
    {
      id: 1,
      text: 'My first post',
      likesCount: 100,
    },
    {
      id: 2,
      text: 'My second post',
      likesCount: 45634,
    },
  ] as Array<PostType>,
  profile: null as null | ProfileType,
  status: '',
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
