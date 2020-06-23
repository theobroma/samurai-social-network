// apiKey is https://social-network.samuraijs.com/ access string
import { apiKey } from './keys';
import axios, { AxiosInstance } from 'axios';
import { AuthData, Photos, Profile, User } from '../@types/index';

interface IResponse {
  resultCode: number;
  messages: Array<string>;
  data: Object;
}

interface IAuthResponse extends IResponse {
  data: {
    id: number;
    email: string;
    login: string;
  };
}

interface ILoginResponse extends IResponse {
  data: {
    userId: number;
  };
}

interface IPhotosResponse extends IResponse {
  data: Photos;
}

interface IUsersResponse {
  items: Array<User>;
  totalCount: number;
  error: string | null;
}

export type ErrorMessage = string;
type Url = string;

const instance: AxiosInstance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': apiKey,
  },
  withCredentials: true,
});

export const AuthAPI = {
  me: async (): Promise<AuthData | ErrorMessage> => {
    try {
      const response = await instance.get('auth/me');
      const serverResponse: IAuthResponse = response.data;

      if (serverResponse.resultCode === 0) {
        return serverResponse.data;
      }
      throw new Error(serverResponse.messages[0]);
    } catch (e) {
      return e.message;
    }
  },

  login: async (
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha?: string,
  ): Promise<
    | { resultCode: number; userId: number }
    | { resultCode: number; error: ErrorMessage }
  > => {
    try {
      const response = await instance.post('auth/login', {
        email,
        password,
        rememberMe,
        captcha,
      });
      const serverResponse: ILoginResponse = response.data;
      if (serverResponse.resultCode === 0) {
        return {
          resultCode: 0,
          userId: serverResponse.data.userId,
        };
      } else if (serverResponse.resultCode === 10) {
        return {
          resultCode: 10,
          error: serverResponse.messages[0],
        };
      } else {
        return {
          resultCode: serverResponse.resultCode,
          error: serverResponse.messages[0],
        };
      }
    } catch (e) {
      return e.message;
    }
  },

  logout: async (): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.delete('auth/login');
      const serverResponse: IResponse = response.data;
      if (serverResponse.resultCode === 0) {
        return true;
      }
      throw new Error(serverResponse.messages[0]);
    } catch (e) {
      return e.message;
    }
  },

  getCaptchaUrl: async (): Promise<Url | ErrorMessage> => {
    try {
      const response = await instance.get('security/get-captcha-url');
      return response.status === 200 ? response.data.url : response.data;
    } catch (e) {
      return e.message;
    }
  },
};

export const UsersAPI = {
  getUsers: async (
    count: number = 10,
    page: number = 1,
    term?: string,
    friend?: boolean,
  ): Promise<IUsersResponse | ErrorMessage> => {
    try {
      const response = await instance.get('/users', {
        params: {
          count,
          page,
          term,
          friend,
        },
      });
      const serverResponse: IUsersResponse = response.data;
      if (serverResponse.error === null) {
        return serverResponse;
      }
      throw new Error(serverResponse.error);
    } catch (e) {
      return e.message;
    }
  },
  isFollowingOn: async (userId: number): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.get(`follow/${userId}`);
      return response.data;
    } catch (e) {
      return e.message;
    }
  },
  follow: async (userId: number): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.post(`follow/${userId}`);
      const serverResponse: IResponse = response.data;
      return serverResponse.resultCode === 0
        ? true
        : serverResponse.messages[0];
    } catch (e) {
      return e.message;
    }
  },
  unfollow: async (userId: number): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.delete(`follow/${userId}`);
      const serverResponse: IResponse = response.data;
      return serverResponse.resultCode === 0
        ? true
        : serverResponse.messages[0];
    } catch (e) {
      return e.message;
    }
  },
};

export const ProfileAPI = {
  getFullData: async (userId: number): Promise<Profile | ErrorMessage> => {
    try {
      const response = await instance.get(`profile/${userId}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return `Can't access to server with status code: ${response.status}`;
      }
    } catch (e) {
      return e.message;
    }
  },
  getStatus: async (userId: number): Promise<string | ErrorMessage> => {
    try {
      const response = await instance.get(`profile/status/${userId}`);
      if (response.status === 200) {
        return response.data;
      } else {
        return `Can't access to server with status code: ${response.status}`;
      }
    } catch (e) {
      return e.message;
    }
  },
  updateStatus: async (text: string): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.put('profile/status', { text });
      const serverResponse: IResponse = response.data;
      return serverResponse.resultCode === 0
        ? true
        : serverResponse.messages[0];
    } catch (e) {
      return e.message;
    }
  },
  updateFullData: async (profile: Profile): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.put('profile', {
        aboutMe: profile.aboutMe,
        userId: profile.userId,
        lookingForAJob: profile.lookingForAJob,
        lookingForAJobDescription: profile.lookingForAJobDescription,
        fullName: profile.fullName,
        contacts: { ...profile.contacts },
      });
      const serverResponse: IResponse = response.data;
      return serverResponse.resultCode === 0
        ? true
        : serverResponse.messages[0];
    } catch (e) {
      return e.message;
    }
  },
  updatePhoto: async (file: File): Promise<Photos | ErrorMessage> => {
    try {
      let formData = new FormData();
      formData.append('image', file);
      const response = await instance.put(
        'profile/photo',
        { formData },
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      const serverResponse: IPhotosResponse = response.data;
      return serverResponse.resultCode === 0
        ? serverResponse.data
        : serverResponse.messages[0];
    } catch (e) {
      return e.message;
    }
  },
};

// TODO: DialogsAPI
