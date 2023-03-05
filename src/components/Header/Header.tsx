import React from 'react';

import Container from 'components/Container';

import {
  Wrapper,
  Heading,
  StyledLink
} from './Header.styles';

const Header = () => (
  <Wrapper>
    <Container>
      <Heading>
        <StyledLink to="/">
        GitHub Search
        </StyledLink>
      </Heading>
    </Container>
  </Wrapper>
);

export default Header;
