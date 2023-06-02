import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: '100%';
  padding: ${pxToRem(10)};
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 580px) {
    justify-content: space-between;
  }
`;
