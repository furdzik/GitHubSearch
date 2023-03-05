import { createSlice } from '@reduxjs/toolkit';

import { IResultsList } from 'interfaces';

const initialState: IResultsList = {
  loading: false,
  idsList: [],
  list: [],
  canLoadMore: true,
  limit: 0
};

const resultsList = createSlice({
  name: 'resultsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {}
});

export default resultsList.reducer;
