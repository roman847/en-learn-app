import styled from 'styled-components';
import { Montserrat16, Color } from 'core/variables/constants';

import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  position: relative;
  width: ${pxToRem(110)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const UserText = styled.span`
  ${Montserrat16};
  font-weight: bold;
`;

export const UserIcon = styled.img`
  width: ${pxToRem(32)}
  height:${pxToRem(32)};
`;

export const Popup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 110%;
  width: 100%;
  height: ${pxToRem(40)};
  background-color: ${Color.correctAnswerBackground};
  transition: 0.4s;

  &:hover {
    font-weight: bold;
  }
`;

export const PopupText = styled.span`
  ${Montserrat16};

  font-weight: inherit;
`;
