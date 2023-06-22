import React, { FC } from 'react';
import {
  Container,
  ContainerText,
  TitleSpan,
  Text,
  ContainerButton,
  ContainerImage,
} from 'components/MainContent/style';
import pxToRem from 'core/functions/pxToRem';
import { Color } from 'core/variables/constants';
import { Title } from 'globalStyle';
import CustomButton from 'components/CustomButton/CustomButton';
import MainImage from 'components/MainImage/MainImage';

const MainContent: FC = () => {
  return (
    <Container>
      <ContainerText>
        <Title color={Color.blackText}>
          Изучай
          <TitleSpan>английский </TitleSpan>
          вместе с нами
        </Title>
        <Text>
          Эффективное изучение английских слов в игровой форме. Теперь аглийский учить легко и
          увлекательно. Для детей и взрослых.
        </Text>
        <ContainerButton>
          <CustomButton text="Начать обучение" />
        </ContainerButton>
      </ContainerText>
      <ContainerImage>
        {' '}
        <MainImage width={pxToRem(430)} height={pxToRem(582)} src="/png/mainImage.png" />
      </ContainerImage>
    </Container>
  );
};

export default MainContent;
