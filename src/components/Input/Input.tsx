import React, { ChangeEvent } from 'react';

import {
  Wrapper
} from './Input.styles';

export interface InputProps {
  value: string | null;
  id: string;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const defaultProps = {
  className: ''
};

const Input = (props: InputProps) => (
  <Wrapper
    className={props.className}
    value={props.value || ''}
    onChange={props.onChange}
  />
);

Input.defaultProps = defaultProps;

export default Input;
