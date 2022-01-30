export type ItemsViewType = 'LIST' | 'GRID';

export type UsersFilterType = {
  term: string;
  friend: boolean | null;
};

export type IDType = number;

export type LoadingStateType = 'idle' | 'pending';

export type ThemeColors = 'light' | 'dark';

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCapcthaEnum {
  CaptchaIsRequired = 10,
}
