import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {
  IResultsList,
  ResponseElement,
  SearchResultsArguments,
  SearchResultsReturns,
  ThunkApiConfig
} from 'interfaces';

import { fetchSearch } from 'api';
import { RESULTS_PER_PAGE } from 'constant';

const initialState: IResultsList = {
  loading: false,
  list: [],
  count: 0,
  page: 0,
  allPages: 0
};

export const getSearchResults = createAsyncThunk<
  SearchResultsReturns, SearchResultsArguments, ThunkApiConfig
  >(
  'resultsList/getSearchResults',
  async ({ value, page }, { rejectWithValue }) => fetchSearch(value, page)
    .then((response) => response.json())
    .then((data) => {
      const { items, total_count } = data;

      return {
        count: total_count,
        list: items,
        page,
        allPages: Math.ceil(total_count / RESULTS_PER_PAGE)
      };
    })
    .catch((error) => rejectWithValue(error))
);

const resultsList = createSlice({
  name: 'resultsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSearchResults.pending, (state) => ({
        ...state,
        ...initialState,
        loading: true,
        list: []
      }))
      .addCase(getSearchResults.fulfilled, (state, action) => {
        const { page, list, allPages, count } = action.payload;

        const newList = list.map((el: ResponseElement) => ({
          id: el.id,
          name: el.name,
          description: el.description,
          url: el.html_url,
          topics: el.topics,
          owner: el.owner?.login,
          ownerUrl: el.owner?.html_url,
          forks: el.forks,
          stars: el.stargazers_count
        }))

        return {
          ...state,
          loading: false,
          list: newList,
          page,
          allPages,
          count
        };
      })
      .addCase(getSearchResults.rejected, (state) => ({
        // @TODO: Error messages
        ...state,
        loading: false
      }))
  }
});

export default resultsList.reducer;
