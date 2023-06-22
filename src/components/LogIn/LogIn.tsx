import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUser, getUserName } from 'services/index';
import CustomButton from 'components/CustomButton/CustomButton';
import { Container } from 'components/LogIn/style';
import AuthorizedUser from 'components/LogIn/components/AuthorizedUser';

const LogIn: FC = () => {
  const navigate = useNavigate();
  const userName = getUserName();
  const [user, setUser] = useState<string | undefined>(userName);

  const exitAccount = () => {
    setUser('');
    removeUser();
  };
  return (
    <Container>
      {user && <AuthorizedUser userName={user} exitAccount={exitAccount} />}
      {!user && <CustomButton handler={() => navigate('/authorization')} text={'Вход'} />}
    </Container>
  );
};

export default LogIn;
