import React from 'react';

import {
  Wrapper
} from './Container.styles';

export type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const defaultProps = {
  className: '',
  id: null
};

const Container = (props: ContainerProps): JSX.Element => (
  <Wrapper
    className={props.className}
  >
    {props.children}
  </Wrapper>
);

Container.defaultProps = defaultProps;

export default Container;
