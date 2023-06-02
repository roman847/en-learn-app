import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';
import { Montserrat16 } from 'core/variables/constants';

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: ${pxToRem(10)};
`;

export const List = styled.ul`
  width: 40%;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  gap: ${pxToRem(10)};
`;

export const ListItem = styled.li`
  ${Montserrat16};
  color: white;
`;
