import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';

export const Container = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 70px 50px;
`;

export const ContainerPersons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: ${pxToRem(50)};
  height: auto;
  box-sizing: border-box;
`;
