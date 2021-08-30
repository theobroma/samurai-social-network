import { instance, APIResponseType, PhotosDataType } from './index';
import { ProfileType, IDType } from '../@types';

export const ProfileAPI = {
  getProfile: async (id: IDType) => {
    try {
      const response = await instance.get<ProfileType>(`profile/${id}`);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
  getStatus: async (id: IDType) => {
    try {
      const response = await instance.get<string>(`profile/status/${id}`);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
  updateStatus: async (status: string) => {
    try {
      const response = await instance.put<APIResponseType>(`profile/status`, {
        status,
      });
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
  saveAvatar: async (file: File) => {
    try {
      const formData = new FormData();
      formData.append('image', file);
      const response = await instance.put<APIResponseType<PhotosDataType>>(
        'profile/photo',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
  updateProfile: async (profile: ProfileType) => {
    try {
      const response = await instance.put<APIResponseType>(`profile`, profile);
      return response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};
