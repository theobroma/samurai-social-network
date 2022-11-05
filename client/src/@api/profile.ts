import type {
  IDType,
  ProfileResponseType,
  ProfileType,
  StandardResponseType,
} from '../@types';

import { instance } from './index';

export const ProfileAPI = {
  getProfile(id: IDType) {
    return instance.get<ProfileResponseType>(`profile/${id}`);
  },
  saveAvatar(file: File) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put<any>('profile/photo', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  updateProfile(profile: ProfileType) {
    return instance.put<StandardResponseType>(`profile`, profile);
  },
};
