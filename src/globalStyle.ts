import styled, { createGlobalStyle } from 'styled-components';
import { Color, Montserrat46, Montserrat36, Montserrat52 } from 'core/variables/constants';

import pxToRem from 'core/functions/pxToRem';

interface ITitileProps {
  color: Color;
}

export const Link = styled.a`
  text-decoration: none;
  color: black;
`;

export const GlobalStyle = createGlobalStyle`
 *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }

 a {
  text-decoration: none;
  color: black;
 }

 ul {
  list-style:none;
 }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export const Title = styled.h2<ITitileProps>`
  ${Montserrat52};
  color: ${(props) => props.color};
  margin-bottom: ${pxToRem(35)};

  @media screen and (max-width: 1050px) {
    ${Montserrat46}
  }

  @media screen and (max-width: 580px) {
    ${Montserrat36}
    text-align:center;
  }
`;
