import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { IPropsCustomSelector } from 'core/interfaces/props';
import {
  TitleBlock,
  Title,
  Icon,
  Popup,
  Container,
  GamesList,
  GameslistItem,
} from 'components/CustomSelect/style';

export const CustomSelect: FC<IPropsCustomSelector> = ({ mobile }) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };

  return (
    <Container>
      <TitleBlock onClick={togglePopup}>
        <Title>Игры</Title>
        {!mobile && <Icon src="/arrowSelect.png" alt="icon" />}
      </TitleBlock>
      {isOpenPopup && (
        <Popup>
          <GamesList>
            <GameslistItem>
              <Link to={'/games/audiocall'}>Аудиовызов</Link>
            </GameslistItem>
            <GameslistItem>
              <Link to={'/games/sprint'}>Спринт</Link>
            </GameslistItem>
          </GamesList>
        </Popup>
      )}
    </Container>
  );
};
