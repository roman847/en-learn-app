import { AxiosError } from 'axios';
import { IRegisterUser, IUserData, ServerError } from 'core/interfaces/data';
import { ServerErrorMessage, UserErrorMessage } from 'core/variables/constants';
import { axiosInstance } from 'services/index';

export const createUserErrHandler = (error: string) => {
  console.log(error);
  if (error.includes(ServerErrorMessage.userExists)) {
    console.log('error');
    return UserErrorMessage.userExists;
  }

  return { errorMessage: 'Unknown error' };
};

export type CreateUser = ({
  email,
  name,
  password,
}: IRegisterUser) => Promise<IUserData | UserErrorMessage | ServerError>;

export const createUser: Awaited<CreateUser> = async ({ email, name, password }) => {
  try {
    const response = await axiosInstance.post('/users', {
      email: email,
      password: password,
      name: name,
    });

    return response.data;
  } catch (error) {
    const serverError = error as AxiosError<string>;
    if (serverError && serverError.response) {
      return createUserErrHandler(serverError.response!.data);
    }
    return { errorMessage: 'Unknown error' };
  }
};
