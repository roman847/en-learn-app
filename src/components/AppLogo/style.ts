import styled from 'styled-components';
import { Color, Mulish28 } from 'core/variables/constants';

export const LogoLink = styled.a`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StartTitle = styled.span`
  ${Mulish28}
  color:${Color.primary}
`;

export const EndTitle = styled.span`
  ${Mulish28}
`;
