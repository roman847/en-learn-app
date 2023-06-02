import React, { FC } from 'react';
import OpportunityItem from 'components/Opportunity/components/OpportunityItem/OpportunityItem';
import { Container, ContainerItems } from 'components/Opportunity/style';
import { Title } from 'globalStyle';
import { Color } from 'core/variables/constants';
import { opportunitiesList } from 'components/Opportunity/constants';

const Opportunity: FC = React.memo(() => {
  return (
    <Container>
      <Title color={Color.primary}>Наши возможности</Title>
      <ContainerItems>
        {opportunitiesList.map(({ img, text, title }, index) => (
          <OpportunityItem img={img} title={title} text={text} key={title + index + 'listItem'} />
        ))}
      </ContainerItems>
    </Container>
  );
});

export default Opportunity;
