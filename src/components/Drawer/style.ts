import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';
import { IPropsDrawer } from 'core/interfaces/props';
import { Color } from 'core/variables/constants';

export const Container = styled.div<IPropsDrawer>`
  position: absolute;
  top: 0;
  left: ${(props) => (props.active ? pxToRem(0) : pxToRem(-300))};
  width: ${pxToRem(300)};
  height: 100%;
  background-color: ${Color.primary};
  box-sizing: border-box;
  transition: 0.3s;
  z-index: 1;
`;
