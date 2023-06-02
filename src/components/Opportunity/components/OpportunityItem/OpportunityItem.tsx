import React, { FC } from 'react';
import { IPropsOpportunityItem } from 'core/interfaces/props';
import {
  Container,
  ItemImage,
  ItemTitle,
  Itemtext,
} from 'components/Opportunity/components/OpportunityItem/style';

const OpportunityItem: FC<IPropsOpportunityItem> = ({ img, title, text }) => {
  return (
    <Container>
      <ItemImage src={img}></ItemImage>
      <ItemTitle>{title}</ItemTitle>
      <Itemtext>{text}</Itemtext>
    </Container>
  );
};

export default OpportunityItem;
