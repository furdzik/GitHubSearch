import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

import { hexToRgbMixin } from 'styles/mixins';

const Wrapper = styled.div`
  margin: 0 0 3rem;
  padding: ${(props) => props.theme.layout.padding / 10}rem 0 3rem;
  background: ${props => hexToRgbMixin(props.theme.color.tertiary, 0.6)};
  text-align: center;

  @media (min-width: 1000px) {
    padding-top: ${(props) => props.theme.layout.paddingDesktop / 10}rem;
  }
  @media (min-width: 1000px) {
    margin-bottom: 5rem;
  }
`;

const Heading = styled.h1`
  font-weight: ${(props) => props.theme.fontWeight.extrabold};
  color: ${(props) => props.theme.color.primary};
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding-bottom: .25rem;
  background-image: linear-gradient(${(props) => props.theme.color.quaternary} 0 0);
  background-position: 0 100%;
  background-size: 0 .5rem;
  background-repeat: no-repeat;
  transition: background-size .3s, background-position 0s .3s;
  &:hover {
    background-position: 100% 100%;
    background-size: 100% .5rem;
  }
`;

export {
  Wrapper,
  Heading,
  StyledLink
};
