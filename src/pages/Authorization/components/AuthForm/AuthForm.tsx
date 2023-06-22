import React, { FC } from 'react';
import { IPropsAuthForm } from 'core/interfaces/props';
import { Container } from 'pages/Authorization/components/AuthForm/style';

const AuthForm: FC<IPropsAuthForm> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default AuthForm;
