import React, { ChangeEvent, FormEvent } from 'react';

import Container from 'components/Container';
import Heading from 'components/Heading';
import Button from 'components/Button';

import {
  Wrapper,
  StyledInput
} from './Search.styles';

export interface SearchProps {
  value: string | null;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
}

const Search = (props: SearchProps): JSX.Element => (
  <Container>
    <form onSubmit={props.onSearch}>
      <Wrapper>
        <Heading withMargin={false}>Search in GitHub:</Heading>
          <StyledInput
            id="search"
            value={props.value}
            onChange={props.onChange}
          />
          <Button type="submit" disabled={!props.value}>Search</Button>
      </Wrapper>
    </form>
  </Container>
);

export default Search;
