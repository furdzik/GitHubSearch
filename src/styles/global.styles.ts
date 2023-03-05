import { css } from '@emotion/react';

import { theme } from './theme';

const GlobalStyles = css`
  html {
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: scroll;
    height: 100%;
    font-family: ${theme.layout.baseFontFamily};
    font-size: ${theme.fontSize.base};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    height: 100%;
    background: ${theme.layout.background};
    font-size: ${theme.fontSize.normal};
    line-height: ${theme.lineHeight.base};
    color: ${theme.colorText.primary};
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
  }

  body,
  p,
  ol,
  ul {
    font-weight: ${theme.fontWeight.regular};
  }

  img {
    max-width: none;
    height: auto;
  }

  textarea,
  select,
  input,
  button {
    outline: none;
    font-family: inherit;
  }

  input {
    padding: 0;
    border-radius: 0;

    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      pointer-events: none;
    }

    &::-webkit-contacts-auto-fill-button {
      position: absolute;
      right: 0;
      display: none;
      visibility: hidden;
      pointer-events: none;
    }

    &::-webkit-caps-lock-indicator,
    &::-webkit-credentials-auto-fill-button {
      display: none;
      pointer-events: none;
    }

    &:-webkit-autofill {
      box-shadow: 0 0 0 100rem ${theme.colorMono.white} inset;
    }

    &:required {
      box-shadow: none;
    }
  }

  button {
    padding: 0;
    border: 0;
    background: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${theme.fontWeight.semibold};
  }
  h1 {
    font-size: 3.6rem;
  }
  h2 {
    font-size: 2.4rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`;

export {
  GlobalStyles
};
