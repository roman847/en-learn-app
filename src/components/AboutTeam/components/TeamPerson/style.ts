import styled from 'styled-components';
import { Color, Montserrat28, Montserrat16 } from 'core/variables/constants';
import pxToRem from 'core/functions/pxToRem';

interface IPropsContainer {
  left?: string;
}

export const Container = styled.div<IPropsContainer>`
  max-width: ${pxToRem(780)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(33)};
  padding: ${pxToRem(35)};
  height: auto;
  box-sizing: border-box;
  box-shadow: 5px 4px 30px rgba(62, 146, 163, 0.15);
  border-radius: ${pxToRem(70)};
  margin-left: ${(props) => props.left};

  @media screen and (max-width: 900px) {
    flex-direction: column;
    gap: ${pxToRem(13)};
  }
`;

export const PersonPhoto = styled.img`
  max-width: ${pxToRem(165)};
  height: auto;
  border-radius: ${pxToRem(56)};
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${pxToRem(5)};
  align-items: start;

  @media screen and (max-width: 900px) {
    align-items: center;
  }
`;

export const PersonName = styled.h3`
  ${Montserrat28};
  color: ${Color.secondary};
`;
export const PersonGithub = styled.a`
  ${Montserrat16};
  color: ${Color.primary};
`;
export const PersonDecription = styled.p`
  ${Montserrat16}
`;
