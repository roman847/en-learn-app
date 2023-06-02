import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 70px 50px;
`;

export const ContainerItems = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${pxToRem(20)};

  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
