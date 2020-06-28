import { instance, ResponseAPI, ResultCodes } from './index';
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
  resultCode: ResultCodes;
  messages: Array<string>;
}
type ProfileSaveAvatar = {
  photos: PhotosType;
};

export const ProfileAPI = {
  getProfile(id: number | null) {
    return instance.get<ProfileGetAPI>(`profile/${id}`).then((res) => res.data);
  },
  getStatus(id: number) {
    return instance.get<string>(`profile/status/${id}`).then((res) => res.data);
  },
  updateStatus(status: string) {
    return instance
      .put<ResponseAPI>(`profile/status`, { status })
      .then((res) => res.data);
  },
  saveAvatar(file: any) {
    const formData = new FormData();
    formData.append('image', file);
    return instance
      .put<ResponseAPI<ProfileSaveAvatar>>('profile/photo', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data);
  },
  saveProfile(profile: ProfileType) {
    return instance
      .put<ProfileUpdateAPI>(`profile`, profile)
      .then((res) => res.data);
  },
};
