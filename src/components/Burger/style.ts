import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';

interface IPropsElementBurger {
  active: boolean;
}

export const Container = styled.div<IPropsElementBurger>`
  width: ${pxToRem(25)};
  heght: ${pxToRem(30)};
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: ${pxToRem(5)};
  cursor: pointer;
  z-index: 2;
  transform: rotate(${(props) => (props.active ? 90 : 0)}deg);
  transition: 0.3s;

  @media screen and (max-width: 580px) {
    display: flex;
  }
`;

export const Line = styled.div<IPropsElementBurger>`
  width: 100 %;
  height: ${pxToRem(2)};
  background-color: ${(props) => (props.active ? 'white' : 'black')};
`;
