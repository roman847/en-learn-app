import styled from 'styled-components';
import pxToRem from 'core/functions/pxToRem';
import { Color, Montserrat16 } from 'core/variables/constants';

interface IPropsInputField {
  borderColor: string;
}

export const Container = styled.div`
  width: 100%;
  height: ${pxToRem(50)};
`;

export const LabelInput = styled.label`
  width: 100%;
`;

export const InputField = styled.input<IPropsInputField>`
  width: 100%;
  height: ${pxToRem(50)};
  padding: ${pxToRem(12)} ${pxToRem(25)};
  border-radius: ${pxToRem(100)};
  border: ${pxToRem(2)} solid;
  border-color: ${(props) => props.borderColor};
  ${Montserrat16};
  box-sizing: border - box;
  transition: 0.4s;
  outline: none;

  &:focus {
    border-color: ${Color.primary};
  }
`;
