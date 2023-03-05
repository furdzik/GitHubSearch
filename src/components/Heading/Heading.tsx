import React from 'react';

import {
  Wrapper
} from './Heading.styles';

export interface HeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const defaultProps = {
  as: 'h2'
};

const Heading = (props: HeadingProps) => (
  <Wrapper as={props.as}>
    {props.children}
  </Wrapper>
);

Heading.defaultProps = defaultProps;

export default Heading;
