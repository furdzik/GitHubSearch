import React from 'react';

import { Item } from 'interfaces';

import ResultsItem from 'components/ResultsItem';
import Container from 'components/Container';
import Heading from 'components/Heading';

import {
  Wrapper,
  NoItemsWrapper
} from './ResultsList.styles';

export interface ResultsListProps {
  list: Item[];
  count: number;
}

const ResultsList = (props: ResultsListProps): JSX.Element => props.list.length ? (
  <Container>
    <Heading>Results found {props.count}:</Heading>
    <Wrapper>
    {
      props.list.map((item) => (
        <ResultsItem
          key={item.id}
          id={item.id}
          name={item.name}
          description={item.description}
          topics={item.topics}
          owner={item.owner}
          ownerUrl={item.ownerUrl}
          url={item.url}
          forks={item.forks}
          stars={item.stars}
        />
      ))
    }
    </Wrapper>
  </Container>
) : (
  <Container>
    <NoItemsWrapper>
      No items
    </NoItemsWrapper>
  </Container>
);

export default ResultsList;
