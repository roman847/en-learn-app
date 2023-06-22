import React, { FC, useState } from 'react';
import { IAuthorizedUser } from 'core/interfaces/props';
import { Container, UserText, UserIcon, Popup, PopupText } from 'components/LogIn/components/style';

const AuthorizedUser: FC<IAuthorizedUser> = ({ userName, exitAccount }) => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  const clickHandler = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  return (
    <Container onClick={clickHandler}>
      <UserText>{userName}</UserText>
      <UserIcon src="/svg/Group.svg"></UserIcon>
      {isOpenPopup && (
        <Popup onClick={exitAccount}>
          <PopupText>Выйти</PopupText>
        </Popup>
      )}
    </Container>
  );
};

export default AuthorizedUser;
