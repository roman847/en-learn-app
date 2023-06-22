import styled from 'styled-components';
import { Color } from 'core/variables/constants';
import pxToRem from 'core/functions/pxToRem';

interface IPropsContainerImage {
  width: string;
  height: string;
}

export const ContainerImage = styled.div<IPropsContainerImage>`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${pxToRem(232)};
  border: ${pxToRem(2)} solid;
  border-color: ${Color.primary};
`;

export const Image = styled.img`
  position: absolute;
  bottom: ${pxToRem(15)};
  left: ${pxToRem(40)};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${pxToRem(232)};
`;
