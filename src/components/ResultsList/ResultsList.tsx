import React from 'react';

import { Item } from 'interfaces';

// import ResultsItem from 'components/ResultsItem';
import Container from 'components/Container';

import {
  Wrapper,
  NoItemsWrapper
} from './ResultsList.styles';

export interface ResultsListProps {
  list: Item[];
  canLoadMore: boolean;
  fetchOnScroll: () => void;
}

const ResultsList = (props: ResultsListProps): JSX.Element => props.list.length ? (
  <Container>
    <Wrapper>
    {
      props.list.map((item) => (
        <div>something</div>
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
