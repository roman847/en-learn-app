import React, { FC } from 'react';
import { Container } from 'components/Drawer/style';
import DrawerNavigation from 'components/Drawer/components/DrawerNavigation';
import { IPropsDrawer } from 'core/interfaces/props';

const Drawer: FC<IPropsDrawer> = ({ active }) => {
  return (
    <Container active={active}>
      <DrawerNavigation />
    </Container>
  );
};

export default Drawer;
