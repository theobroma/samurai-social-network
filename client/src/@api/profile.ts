import { instance } from './index';
import { ProfileResponseType, IDType } from '../@types';

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
  updateProfile(profile: ProfileResponseType) {
    return instance.put<any>(`profile`, profile);
  },
};
