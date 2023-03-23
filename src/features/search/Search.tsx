import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';

import { AppDispatch, RootState } from 'interfaces';

import { DEFAULT_PAGE, RESULTS_PER_PAGE } from 'constant';

import Loader from 'components/Loader';
import ResultsList from 'components/ResultsList';
import SearchComponent from 'components/Search';
import Container from 'components/Container';

import { getSearchResults } from './searchSlice';

const Search = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  const [value, setValue] = useState('');

  const loading = useSelector((state: RootState) => state.search.loading);
  const list = useSelector((state: RootState) => state.search.list);
  const count = useSelector((state: RootState) => state.search.count);
  const page = useSelector((state: RootState) => state.search.page);
  const allPages = useSelector((state: RootState) => state.search.allPages);

  return (
    <React.Fragment>
      <SearchComponent
        value={value}
        onSearch={() => {
          dispatch(getSearchResults({ value, page: DEFAULT_PAGE }));
        }}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
      {
        list.length ? (
          <ResultsList
            list={list}
            count={count}
          />
        ) : null
      }
      {
        list.length && count > RESULTS_PER_PAGE ? (
          <Container>
            <Pagination
              size="large"
              page={page}
              count={allPages}
              onChange={(event, page: number) => {
                dispatch(getSearchResults({ value, page }));
              }}
            />
          </Container>
        ) : null
      }
      {
        loading ? (
          <Loader loaderType="static" withMarginTop />
        ) : null
      }
    </React.Fragment>
  );
};

export default Search;
