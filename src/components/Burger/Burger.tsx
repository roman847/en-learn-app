import React, { FC } from 'react';
import { IPropsBurger } from 'core/interfaces/props';
import { Container, Line } from 'components/Burger/style';

const Burger: FC<IPropsBurger> = ({ onOpen, active }) => {
  return (
    <Container onClick={onOpen} active={active}>
      <Line active={active}></Line>
      <Line active={active}></Line>
      <Line active={active}></Line>
    </Container>
  );
};

export default Burger;
