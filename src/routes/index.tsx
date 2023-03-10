import React, { useLayoutEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation
} from 'react-router-dom';

import Layout from 'components/Layout';

import Search from 'features/search';

interface RouterWrapperProps {
  children: JSX.Element;
}

const RouterWrapper = (props: RouterWrapperProps): JSX.Element => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  return props.children;
};

const RoutesConfig = (): JSX.Element => (
  <BrowserRouter>
    <RouterWrapper>
      <Routes>
        <Route
          path="/"
          element={(
            <Layout>
              <Search />
            </Layout>
          )}
        />
      </Routes>
    </RouterWrapper>
  </BrowserRouter>
);

export default RoutesConfig;
