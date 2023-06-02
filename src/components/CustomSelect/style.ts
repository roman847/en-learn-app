import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';
import { Color, Montserrat18, Montserrat16 } from 'core/variables/constants';

export const Container = styled.div`
  position: relative;
`;

export const TitleBlock = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  cursor: pointer;
`;

export const Title = styled.h3`
  ${Montserrat18}
`;

export const Icon = styled.img`
  width: ${pxToRem(10)};
  height: ${pxToRem(8)};
  margin-top: ${pxToRem(5)};
`;

export const Popup = styled.div`
  position: absolute;
  left: 0;
  width: ${pxToRem(145)};
  height: ${pxToRem(71)};
  background-color: ${Color.correctAnswerBackground};
  padding: 5px;
`;

export const GamesList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(6)};
`;

export const GameslistItem = styled.li`
  ${Montserrat16}
  transition:0.3s;

  &:hover {
    font-weight: bold;
  }
`;
