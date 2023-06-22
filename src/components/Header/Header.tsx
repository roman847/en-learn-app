import React, { FC, useState } from 'react';
import Drawer from 'components/Drawer/Drawer';
import AppLogo from 'components/AppLogo/AppLogo';
import LogIn from 'components/LogIn/LogIn';
import HeaderNavigation from 'components/Header/components/HeaderNavigation';
import Burger from 'components/Burger/Burger';
import { Container } from 'components/Header/styles';

const Header: FC = React.memo(() => {
  const [isActiveDrawer, setIsActiveDrawer] = useState(false);

  const toggleBurger = () => {
    setIsActiveDrawer(!isActiveDrawer);
  };

  return (
    <Container>
      <Drawer active={isActiveDrawer} />
      <Burger onOpen={toggleBurger} active={isActiveDrawer} />
      <AppLogo />
      <HeaderNavigation />
      <LogIn />
    </Container>
  );
});

export default Header;
