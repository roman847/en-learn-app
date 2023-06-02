import React from 'react';
import { Button } from 'components/CustomButton/style';
import { Color } from 'core/variables/constants';

const CustomButton = () => {
  return (
    <>
      <Button color={Color.white} border={Color.primary} hover={Color.activePrimaryButton}>
        Вход
      </Button>
    </>
  );
};

export default CustomButton;
