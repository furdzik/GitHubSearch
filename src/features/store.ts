import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';

import searchReducer from 'features/search/searchSlice';

setAutoFreeze(false);

const store = configureStore({
  reducer: {
    search: searchReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  })
});

export default store;
