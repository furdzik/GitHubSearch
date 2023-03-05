import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { hexToRgbMixin } from 'styles/mixins';

interface WrapperProps {
  variant: 'primary' | 'secondary' | undefined;
}

const Wrapper = styled.a<WrapperProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 15rem;
  height: 5rem;
  padding: 1rem 2rem;
  border-radius: 5rem;
  font-size: ${(props) => props.theme.fontSize.medium};
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  transition: ${(props) => props.theme.layout.transition};

  ${(props) => props.variant === 'primary' && css`
    background: ${props.theme.color.quaternary};
    color: ${props.theme.colorMono.white};
    &:hover {
      background: ${props.theme.color.quaternaryHover};
    }
    &:focus {
      background: ${props.theme.color.quaternaryFocus};
    }
  `};

  ${(props) => props.variant === 'secondary' && css`
    background: transparent;
    border: .2rem solid ${props.theme.color.quaternary};
    color: ${props.theme.colorMono.black};
    &:hover {
      background: ${hexToRgbMixin(props.theme.color.quaternary, 0.2)};
    }
    &:focus {
      background: ${hexToRgbMixin(props.theme.color.quaternary, 0.2)};
    }
  `};
`;

export {
  Wrapper
};
