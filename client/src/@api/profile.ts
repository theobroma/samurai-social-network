import { instance, APIResponseType, ResultCodesEnum } from './index';
import { ContactsType, PhotosType, ProfileType } from '../@types';

interface ProfileBaseAPI {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  contacts: ContactsType;
}

interface ProfileGetAPI extends ProfileBaseAPI {
  photos: PhotosType;
}

interface ProfileUpdateAPI extends ProfileBaseAPI {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
}
type ProfileSaveAvatar = {
  photos: PhotosType;
};

export const ProfileAPI = {
  // getProfile(id: number | null) {
  //   return instance.get<any>(`profile/${id}`).then((res) => res.data);
  // },
  getProfile: async (id: number | null): Promise<any> => {
    try {
      const response = await instance.get<any>(`profile/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
  getStatus: async (id: number | null) => {
    try {
      const response = await instance.get<string>(`profile/status/${id}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
  // getStatus(id: number) {
  //   return instance.get<string>(`profile/status/${id}`).then((res) => res.data);
  // },
  // updateStatus(status: string) {
  //   return instance
  //     .put<ResponseAPI>(`profile/status`, { status })
  //     .then((res) => res.data);
  // },
  updateStatus: async (status: string) => {
    try {
      const response = await instance.put<APIResponseType>(`profile/status`, {
        status,
      });
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
  // saveAvatar(file: any) {
  //   const formData = new FormData();
  //   formData.append('image', file);
  //   return instance
  //     .put<ResponseAPI<ProfileSaveAvatar>>('profile/photo', formData, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data',
  //       },
  //     })
  //     .then((res) => res.data);
  // },
  // saveProfile(profile: ProfileType) {
  //   return instance
  //     .put<ProfileUpdateAPI>(`profile`, profile)
  //     .then((res) => res.data);
  // },
  updateProfile: async (profile: any) => {
    try {
      const response = await instance.put<APIResponseType>(`profile`, profile);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
};
