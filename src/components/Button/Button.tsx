import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

import {
  Wrapper
} from './Button.styles';

export interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  component?: 'inside-link' | 'outside-link' | 'button' | undefined;
  href?: string | undefined;
  onClick?: () => void;
  type?: 'submit' | 'button';
  target?: '_blank' | '_self' | '_parent' | '_top';
  variant?: 'primary' | 'secondary' | undefined;
  disabled?: boolean;
}
const defaultProps = {
  className: '',
  component: 'button',
  href: '',
  type: 'button',
  target: '',
  variant: 'primary',
  disabled: false
};

const Button = (props: ButtonProps) => {
  const getComponent = () => {
    switch (props.component) {
      case 'button': {
        return 'button';
      }
      case 'inside-link': {
        return (linkProps: LinkProps) => (
          <Link {...linkProps} to={props.href as string} />
        );
      }

      default:
        return 'a';
    }
  };

  return (
    <Wrapper
      as={getComponent()}
      type={props.component === 'button' ? props.type : ''}
      className={props.className}
      href={props.component === 'outside-link' ? props.href : ''}
      target={props.component === 'outside-link' ? props.target : ''}
      variant={props.variant}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </Wrapper>
  );
};

Button.defaultProps = defaultProps;

export default Button;
