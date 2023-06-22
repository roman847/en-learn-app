export interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

export interface IUserData {
  message: string;
  token: string;
  refreshToken: string;
  userId: string;
  name: string;
}

// eslint-disable-next-line prettier/prettier
export type ServerError = { errorMessage: string; };

export interface IAuthorizedUser {
  userName: string | undefined;
  exitAccount: () => void;
}

export interface IErrorAuthorization {
  isError: boolean;
  errorMessage: string;
}
