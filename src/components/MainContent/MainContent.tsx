import React, { FC } from 'react';
import {
  ContainerImage,
  MainImage,
  Container,
  ContainerText,
  TitleSpan,
  Text,
  ContainerButton,
} from 'components/MainContent/style';
import { Color } from 'core/variables/constants';
import { Title } from 'globalStyle';
import CustomButton from 'components/CustomButton/CustomButton';

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
          <CustomButton />
        </ContainerButton>
      </ContainerText>
      <ContainerImage>
        <MainImage src="/png/mainImage.png"></MainImage>
      </ContainerImage>
    </Container>
  );
};

export default MainContent;
