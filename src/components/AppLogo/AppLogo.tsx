import React from 'react';
import { StartTitle, EndTitle, LogoLink } from './style';

const AppLogo = React.memo(() => {
  return (
    <LogoLink href="/">
      <StartTitle>RS</StartTitle>
      <EndTitle>LANG</EndTitle>
    </LogoLink>
  );
});

export default AppLogo;
