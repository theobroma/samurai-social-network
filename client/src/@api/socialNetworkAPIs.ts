// apiKey is https://social-network.samuraijs.com/ access string
import axios, { AxiosInstance } from 'axios';

export type AuthData = {
  id: number | null;
  email: string | null;
  login: string | null;
};

export type Photos = {
  small: string | null;
  large: string | null;
};

export type User = {
  id: number;
  name: string;
  status: string | null;
  uniqueUrlName: string | null;
  photos: Photos;
  followed: boolean;
};

export type Profile = {
  aboutMe: string | null;
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  contacts: {
    github: string | null;
    vk: string | null;
    facebook: string | null;
    instagram: string | null;
    twitter: string | null;
    website: string | null;
    youtube: string | null;
    mainLink: string | null;
  };
  photos: Photos;
};

// =======================================

interface IResponse {
  resultCode: number;
  messages: Array<string>;
  data: Record<string, any>;
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
    'API-KEY': 'xxxxxxxx-xxxx-xxx-xxxx-xxxxxxxxxxxx',
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
    } catch (e: any) {
      return e.message;
    }
  },

  login: async (
    email: string,
    password: string,
    rememberMe = false,
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
      }
      if (serverResponse.resultCode === 10) {
        return {
          resultCode: 10,
          error: serverResponse.messages[0],
        };
      }
      return {
        resultCode: serverResponse.resultCode,
        error: serverResponse.messages[0],
      };
    } catch (e: any) {
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
    } catch (e: any) {
      return e.message;
    }
  },

  getCaptchaUrl: async (): Promise<Url | ErrorMessage> => {
    try {
      const response = await instance.get('security/get-captcha-url');
      return response.status === 200 ? response.data.url : response.data;
    } catch (e: any) {
      return e.message;
    }
  },
};

export const UsersAPI = {
  getUsers: async (
    count = 10,
    page = 1,
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
    } catch (e: any) {
      return e.message;
    }
  },
  isFollowingOn: async (userId: number): Promise<boolean | ErrorMessage> => {
    try {
      const response = await instance.get(`follow/${userId}`);
      return response.data;
    } catch (e: any) {
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
    } catch (e: any) {
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
    } catch (e: any) {
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
      }
      return `Can't access to server with status code: ${response.status}`;
    } catch (e: any) {
      return e.message;
    }
  },
  getStatus: async (userId: number): Promise<string | ErrorMessage> => {
    try {
      const response = await instance.get(`profile/status/${userId}`);
      if (response.status === 200) {
        return response.data;
      }
      return `Can't access to server with status code: ${response.status}`;
    } catch (e: any) {
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
    } catch (e: any) {
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
    } catch (e: any) {
      return e.message;
    }
  },
  updatePhoto: async (file: File): Promise<Photos | ErrorMessage> => {
    try {
      const formData = new FormData();
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
    } catch (e: any) {
      return e.message;
    }
  },
};

// TODO: DialogsAPI
