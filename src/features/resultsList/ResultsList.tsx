import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from 'interfaces';

import Loader from 'components/Loader';
import ResultsListComponent from 'components/ResultsList';

// import { getTopStoriesIds, getStories } from './resultsListSlice';

const ResultsList = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    // dispatch(getTopStoriesIds({ limit: FETCH_ITEMS_STORY_LIMIT }));
  }, [dispatch]);

  const idsList = useSelector((state: RootState) => state.resultsList.idsList);

  useEffect(() => {
    if (idsList.length) {
      // dispatch(getStories());
    }
  }, [dispatch, idsList]);


  const list = useSelector((state: RootState) => state.resultsList.list);
  const loading = useSelector((state: RootState) => state.resultsList.loading);
  const canLoadMore = useSelector((state: RootState) => state.resultsList.canLoadMore);

  return (
    <React.Fragment>
      {
        list.length ? (
          <ResultsListComponent
            list={list}
            canLoadMore={canLoadMore}
            fetchOnScroll={() => {
              // dispatch(getStories());
            }}
          />
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

export default ResultsList;
