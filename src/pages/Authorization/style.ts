import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';
import { Color, Montserrat36, Montserrat16 } from 'core/variables/constants';
import { BoxFlexRow, BoxFlexColumn } from 'styles/commonStyle';
import { Montserrat22 } from './../../core/variables/constants';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: ${pxToRem(10)};
`;

export const MainContent = styled.div`
  width: 100%;
  height: auto;
  padding-top: ${pxToRem(60)};
  ${BoxFlexRow};
  padding-right: ${pxToRem(40)};
`;

export const LeftSide = styled.div`
  width: 40%;
  height: auto;
  ${BoxFlexColumn};

  @media screen and (max-width: 950px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  ${Montserrat36};
  color: ${Color};
  margin-bottom: ${pxToRem(30)};

  @media screen and (max-width: 580px) {
    ${Montserrat22}
  }
`;

export const LeftLogo = styled.span`
  ${Montserrat36};
  color: ${Color.primary};
  font-weight: bold;

  @media screen and (max-width: 580px) {
    ${Montserrat22}
  }
`;

export const RightLogo = styled.span`
  ${Montserrat36};
  color: ${Color.blackText};
  font-weight: bold;

  @media screen and (max-width: 580px) {
    ${Montserrat22}
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  height: ${pxToRem(50)};
`;

export const ContainerInput = styled.div`
  position: relative;
`;

export const ErrorText = styled.span`
  position: absolute;
  top: ${pxToRem(-25)};
  ${Montserrat16}
  color:${Color.error};
`;

export const MainImageBox = styled.div`
  @media screen and (max-width: 950px) {
    display: none;
  }
`;

export const FooterAuth = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: ${pxToRem(10)};
  padding-top: ${pxToRem(20)};

  @media screen and (max-width: 580px) {
    flex-direction: column;
  }
`;

export const FooterText = styled.span`
  ${Montserrat16}
  margin:0;
`;

export const FooterLink = styled.span`
  text-decoration: underline;
  margin: 0;
  ${Montserrat16};
  color: ${Color.secondary};
`;

export const Spinner = styled;

export const ErrorMessage = styled.span`
  ${Montserrat16}
  color:${Color.error}
`;
