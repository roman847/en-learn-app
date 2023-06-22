import React, { FC } from 'react';
import { Button } from 'components/CustomButton/style';
import { Color } from 'core/variables/constants';
import { IPropsCustomButton } from 'core/interfaces/props';

const CustomButton: FC<IPropsCustomButton> = ({ handler, text, color, hover }) => {
  return (
    <>
      <Button
        color={color ? color : Color.white}
        border={Color.primary}
        textColor={!color || color === Color.white ? Color.blackText : Color.white}
        hover={hover ? hover : Color.activePrimaryButton}
        onClick={handler}
      >
        {text}
      </Button>
    </>
  );
};

export default CustomButton;
