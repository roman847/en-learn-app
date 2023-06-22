import styled from 'styled-components';
import {
  Color,
  Montserrat52,
  Montserrat16,
  Montserrat46,
  Montserrat36,
} from 'core/variables/constants';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  height: auto;
  box-sizing: border-box;
  padding: 70px 50px;
  overflow-x: hidden;
  @media screen and (max-width: 1050px) {
    flex-direction: column;
    align-items: center;
    gap: ${pxToRem(30)};
  }
`;

export const ContainerText = styled.div`
  width: 50%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: ${pxToRem(24)};

  @media screen and (max-width: 1050px) {
    width: 100%;
    align-items: center;
    gap: ${pxToRem(20)};
  }
`;

export const TitleSpan = styled.span`
  ${Montserrat52};
  color: ${Color.secondary};
  font-style: italic;

  @media screen and (max-width: 1050px) {
    ${Montserrat46}
  }
  @media screen and (max-width: 580px) {
    ${Montserrat36}
    text-align:center;
  }
`;

export const Text = styled.p`
  ${Montserrat16}

  @media screen and (max-width: 580px) {
    text-align: center;
  }
`;

export const ContainerButton = styled.div`
  width: ${pxToRem(230)};
  height: ${pxToRem(50)};
  margin-top: ${pxToRem(60)};

  @media screen and (max-width: 1050px) {
    width: 50%;
    margin-top: ${pxToRem(40)};
  }
  @media screen and (max-width: 580px) {
    margin-top: ${pxToRem(25)};
  }
`;

export const ContainerImage = styled.div`
  @media screen and (max-width: 1050px) {
    order: -1;
  }
`;
