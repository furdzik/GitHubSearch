import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface WrapperProps {
  withMargin?: boolean | undefined;
}

const Wrapper = styled.div<WrapperProps>`
  ${(props) => props.withMargin && css`
    margin-bottom: 3rem;
  `};

  ${(props) => props.as === 'h1' && css`
    color: ${props.theme.color.quaternary};
    text-transform: uppercase;
  `};
`;

export {
  Wrapper
};
