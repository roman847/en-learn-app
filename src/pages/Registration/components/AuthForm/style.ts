import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';
import { BoxFlexColumn } from 'styles/commonStyle';

export const Container = styled.div`
  width: 100%;
  height: auto;
  ${BoxFlexColumn};
  gap: ${pxToRem(30)};
`;
