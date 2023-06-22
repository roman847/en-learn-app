import React, { FC } from 'react';
import { IPropsCustomInput } from 'core/interfaces/props';
import { Container, InputField, LabelInput } from 'components/CustomInput/style';

const CustomInput: FC<IPropsCustomInput> = ({
  placeholder,
  value,
  onChangeHandler,
  onBlurHandler,
  borderColor,
  errorMessage,
}) => {
  return (
    <Container>
      <LabelInput htmlFor="email">
        {errorMessage}
        <InputField
          placeholder={placeholder}
          name="email"
          value={value}
          borderColor={borderColor}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeHandler(e)}
          onBlur={onBlurHandler}
        />
      </LabelInput>
    </Container>
  );
};

export default CustomInput;
