import React from 'react';

import {
  Wrapper
} from './Heading.styles';

export interface HeadingProps {
  children: React.ReactNode;
  withMargin?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}
const defaultProps = {
  as: 'h2',
  withMargin: true
};

const Heading = (props: HeadingProps) => (
  <Wrapper
    as={props.as}
    withMargin={props.withMargin}
  >
    {props.children}
  </Wrapper>
);

Heading.defaultProps = defaultProps;

export default Heading;
