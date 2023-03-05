import React from 'react';

import {
  LoaderWrapper,
  Circle,
  Svg
} from './Loader.styles';

export interface LoaderProps {
  loaderType?: 'fixed' | 'static' | 'absolute';
  covered?: boolean;
  semiCovered?: boolean;
  className?: string;
  withMarginTop?: boolean;
}
const defaultProps = {
  className: '',
  covered: false,
  loaderType: 'fixed',
  semiCovered: false,
  withMarginTop: false
};

const Loader = (props: LoaderProps) => (
  <LoaderWrapper
    className={props.className}
    loaderType={props.loaderType}
    covered={props.covered}
    semiCovered={props.semiCovered}
    withMarginTop={props.withMarginTop}
  >
    <Svg width="45" height="45" viewBox="25 25 50 50">
      <Circle cx="50" cy="50" r="20" fill="none" />
    </Svg>
  </LoaderWrapper>
);

Loader.defaultProps = defaultProps;

export default Loader;
