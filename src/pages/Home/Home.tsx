import React, { FC } from 'react';
import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';
import { Container, Wrapper } from 'globalStyle';
import Opportunity from 'components/Opportunity/Opportunity';
import AboutTeam from 'components/AboutTeam/AboutTeam';
import Footer from 'components/Footer/Footer';

const Home: FC = () => {
  return (
    <Container>
      <Wrapper>
        <Header />
        <MainContent />
        <Opportunity />
        <AboutTeam />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Home;
