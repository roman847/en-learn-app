import { UserErrorMessage } from 'core/variables/constants';
import { IRegisterUser, IUserData, ServerError } from 'core/interfaces/data';

export type SignIn = ({
  password,
  email,
}: Omit<IRegisterUser, 'name'>) => Promise<IUserData | UserErrorMessage | ServerError>;
