import styled from 'styled-components';
import { Color, Montserrat18 } from 'core/variables/constants';

interface IPropsButton {
  readonly color: Color;
  readonly border: Color;
  readonly hover: Color;
  readonly textColor: Color;
}

export const Button = styled.button<IPropsButton>`
  ${Montserrat18}
  width: 100%;
  height: 100%;
  background: ${(props) => props.color};
  border: 2px solid;
  border-color: ${(props) => props.border};
  border-radius: 50px;
  color: ${(props) => props.textColor};
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${(props) => props.hover};
    border-color: ${(props) => props.hover};
  }
`;
