import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  margin-bottom: 3rem;

  ${(props) => props.as === 'h1' && css`
    color: ${props.theme.color.quaternary};
    text-transform: uppercase;
  `};
`;

export {
  Wrapper
};
