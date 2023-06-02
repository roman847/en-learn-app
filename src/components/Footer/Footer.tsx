import React from 'react';
import {
  Container,
  ContainerLogo,
  Wrapper,
  TextBoldFooter,
  ContainerNavList,
  NavList,
  NavListItem,
  ContainerTeamList,
  GithubIcon,
} from 'components/Footer/style';
import AppLogo from 'components/AppLogo/AppLogo';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <ContainerLogo>
          <AppLogo />
          <TextBoldFooter>2023</TextBoldFooter>
        </ContainerLogo>
        <ContainerNavList>
          <NavList>
            <TextBoldFooter>
              Меню
              <NavListItem>Главная</NavListItem>
              <NavListItem>Учебник</NavListItem>
              <NavListItem>Игры</NavListItem>
              <NavListItem>Статистика</NavListItem>
            </TextBoldFooter>
          </NavList>
        </ContainerNavList>
        <ContainerTeamList>
          <NavList>
            <TextBoldFooter>Команда</TextBoldFooter>
            <NavListItem>Роман</NavListItem>
            <NavListItem>Роман</NavListItem>
            <NavListItem>Роман</NavListItem>
          </NavList>
        </ContainerTeamList>
        <a href="https://github.com/roman847" target="_blank" rel="noreferrer">
          <GithubIcon src="/svg/image 1.svg"></GithubIcon>
        </a>
      </Wrapper>
    </Container>
  );
};

export default Footer;
