import React, { ChangeEvent, FormEvent } from 'react';
import _debounce from 'lodash/debounce';

import { DEBOUNCE_TIME } from 'constant';

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
  onSearch: () => void;
}

const Search = (props: SearchProps): JSX.Element => {
  const handleDebounce = _debounce((callback, query) => {
    callback(query);

  }, DEBOUNCE_TIME);

  return (
    <Container>
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          handleDebounce(props.onSearch, props.value);
        }}
      >
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
  )
};

export default Search;
