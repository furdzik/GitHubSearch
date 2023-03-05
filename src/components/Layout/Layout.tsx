import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => (
  <React.Fragment>
    <Header />
    {props.children}
    <Footer />
  </React.Fragment>
);

export default Layout;
