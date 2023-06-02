import styled from 'styled-components';
import { Color, Montserrat16, Montserrat28 } from 'core/variables/constants';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: ${pxToRem(270)};
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
`;

export const ItemImage = styled.img`
  width: 100%;
  height: auto;
`;

export const ItemTitle = styled.h3`
  ${Montserrat28};
  color: ${Color.secondary};
`;

export const Itemtext = styled.p`
  ${Montserrat16}
`;
