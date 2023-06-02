import React, { FC } from 'react';
import {
  Container,
  ContainerInfo,
  PersonDecription,
  PersonGithub,
  PersonName,
  PersonPhoto,
} from 'components/AboutTeam/components/TeamPerson/style';
import { IPropsTeamPerson } from 'core/interfaces/props';

const TeamPerson: FC<IPropsTeamPerson> = React.memo(({ name, desc, img, github, left }) => {
  return (
    <Container left={left}>
      <PersonPhoto src={img}></PersonPhoto>
      <ContainerInfo>
        <PersonName>{name}</PersonName>
        <PersonGithub>{github}</PersonGithub>
        <PersonDecription>{desc}</PersonDecription>
      </ContainerInfo>
    </Container>
  );
});

export default TeamPerson;
