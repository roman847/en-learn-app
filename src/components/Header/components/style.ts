import styled from 'styled-components';
import { Color, Montserrat18 } from 'core/variables/constants';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 580px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: ${pxToRem(40)};
  align-items: center;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ListItem = styled.li`
  position: relative;
  ${Montserrat18}
  cursor:pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: ${pxToRem(2)};
    background-color: black;
    transition: 0.3s;
    width: 0;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const ListItemActive = styled.li`
  position: relative;

  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    height: 2px;
    background-color: ${Color.primary};
    transition: 0.3s;
    width: 100%;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const LinkNav = styled.div`
  ${Montserrat18}
`;
