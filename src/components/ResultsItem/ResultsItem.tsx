import React from 'react';

import Button from 'components/Button';

import {
  Wrapper
} from './ResultsItem.styles';

export interface ResultsItemProps {
}

const ResultsItem = (props: ResultsItemProps): JSX.Element => (
  <Wrapper>
    <div>Empty</div>
    <Button href="">See repository</Button>
  </Wrapper>
);

export default ResultsItem;
