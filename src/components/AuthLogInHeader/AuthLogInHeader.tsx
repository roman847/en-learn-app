import React from 'react';
import { Container } from 'components/AuthLogInHeader/style';
import { Wrapper } from 'globalStyle';
import AppLogo from 'components/AppLogo/AppLogo';

const AuthLogInHeader = () => {
  return (
    <Container>
      <Wrapper>
        <AppLogo></AppLogo>
      </Wrapper>
    </Container>
  );
};

export default AuthLogInHeader;
