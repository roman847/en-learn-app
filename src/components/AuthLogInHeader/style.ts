import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: ${pxToRem(10)};
`;
