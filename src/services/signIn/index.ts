import { AxiosError } from 'axios';
import { SignIn } from 'core/types/index';
import { ServerErrorMessage, UserErrorMessage } from 'core/variables/constants';
import { saveToken, saveUserId, saveUserName, axiosInstance } from 'services/index';

export const signInErrHandler = (error: string) => {
  console.log(error);
  if (error.includes(ServerErrorMessage.forbidden)) {
    console.log('error');
    return UserErrorMessage.forbidden;
  }
  if (error.includes(ServerErrorMessage.userNotFound)) return UserErrorMessage.userNotFound;

  return { errorMessage: 'Unknown error' };
};

export const signIn: Awaited<SignIn> = async ({ password, email }) => {
  try {
    const response = await axiosInstance.post('/signin', {
      password: password,
      email: email,
    });

    saveToken(response.data);
    saveUserId(response.data);
    saveUserName(response.data);

    return response.data;
  } catch (error) {
    const serverError = error as AxiosError<string>;
    if (serverError && serverError.response) {
      return signInErrHandler(serverError.response!.data);
    }
    return { errorMessage: 'Unknown error' };
  }
};
