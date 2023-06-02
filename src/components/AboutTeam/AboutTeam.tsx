import React, { FC } from 'react';
import { Title } from 'globalStyle';
import { Color } from 'core/variables/constants';
import { team } from 'components/AboutTeam/components/TeamPerson/data';
import TeamPerson from 'components/AboutTeam/components/TeamPerson/TeamPerson';
import { Container, ContainerPersons } from 'components/AboutTeam/style';
import { IPropsTeamPerson } from 'core/interfaces/props';

const AboutTeam: FC = React.memo(() => {
  return (
    <Container>
      <Title color={Color.primary}>О команде</Title>
      <ContainerPersons>
        {team.map((item: IPropsTeamPerson, index: number) => {
          return (
            <TeamPerson
              key={item.name + index}
              name={item.name}
              img={item.img}
              desc={item.desc}
              github={item.github}
              left={index % 2 === 0 ? '0' : 'auto'}
            />
          );
        })}
      </ContainerPersons>
    </Container>
  );
});

export default AboutTeam;
