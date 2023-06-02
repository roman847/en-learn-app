import styled from 'styled-components';
import { Color, Montserrat16 } from 'core/variables/constants';
import pxToRem from 'core/functions/pxToRem';
import { BoxFlexColumn, BoxFlexRow } from 'styles/commonStyle';

export const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  background-color: ${Color.primaryLight};
`;

export const Wrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  ${BoxFlexRow};
  align-items: start;
  padding: 70px 50px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 40px 10px;
  }
`;

export const ContainerLogo = styled.div`
  width: ${pxToRem(130)};
  ${BoxFlexColumn}
  justify-content: start;
`;

export const TextBoldFooter = styled.span`
  ${Montserrat16};
  font-weight: bold;
`;

export const ContainerNavList = styled.div`
  width: ${pxToRem(100)};

  @media screen and (max-width: 768px) {
    width: 50%;
    display: none;
  }
`;

export const NavList = styled.ul`
  width: 100%;
  ${BoxFlexColumn};
`;

export const NavListItem = styled.li`
  ${Montserrat16}
`;

export const ContainerTeamList = styled.div`
  width: ${pxToRem(130)};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GithubIcon = styled.img`
  width: ${pxToRem(35)};
  height: ${pxToRem(35)};
`;
