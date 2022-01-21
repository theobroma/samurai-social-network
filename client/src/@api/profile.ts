import { instance, APIResponseType, PhotosDataType } from './index';
import { ProfileResponseType, IDType } from '../@types';

export const ProfileAPI = {
  getProfile(id: IDType) {
    return instance.get<ProfileResponseType>(`profile/${id}`);
  },
  getStatus(id: IDType) {
    return instance.get<string>(`profile/status/${id}`);
  },
  updateStatus: async (status: string) => {
    try {
      const response = await instance.put<{ status: string }>(
        `profile/status`,
        {
          status,
        },
      );
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
  saveAvatar: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await instance.put<any>('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
  updateProfile: async (profile: ProfileResponseType) => {
    try {
      const response = await instance.put<any>(`profile`, profile);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
