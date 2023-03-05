import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { LoaderProps } from 'components/Loader';

const LoaderWrapper = styled.div<LoaderProps>`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;

  ${(props) => props.covered && css`
    background: ${props.theme.colorMono.white};
  `};
  ${(props) => props.semiCovered && css`
    background: rgba(255 255 255 / .5);
  `};
  ${(props) => props.loaderType === 'absolute' && css`
    position: absolute;
  `};
  ${(props) => props.loaderType === 'fixed' && css`
    position: fixed;
  `};
  ${(props) => props.loaderType === 'static' && css`
    position: static;
    margin-bottom: 2rem;

    ${props.withMarginTop && css`
      margin-top: 2rem;
    `};
  `};
`;

const Svg = styled.svg`
  animation: rotate 2s linear infinite;

  @keyframes rotator {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(100deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Circle = styled.circle`
  animation: animate-stroke 1.5s ease-in-out infinite;
  fill: none;
  stroke: ${(props) => props.theme.color.quaternary};
  stroke-dasharray: 10, 10;
  stroke-linecap: round;
  stroke-width: 3px;

  @keyframes animate-stroke {
    0% {
      stroke-dasharray: 5, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }
`;

export {
  LoaderWrapper,
  Circle,
  Svg
};
