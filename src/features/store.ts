import { configureStore } from '@reduxjs/toolkit';
import { setAutoFreeze } from 'immer';

import resultsListReducer from 'features/resultsList/resultsListSlice';

setAutoFreeze(false);

const store = configureStore({
  reducer: {
    resultsList: resultsListReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false
  })
});

export default store;
