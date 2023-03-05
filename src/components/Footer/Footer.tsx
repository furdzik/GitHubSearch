import React from 'react';

import {
  Wrapper,
  FooterLink
} from './Footer.styles';
import Container from 'components/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Wrapper>
      <Container>
        <b>GitHubSearch {currentYear}</b>{' '}
        by <FooterLink href="https://furdzik.com/" target="_blank">Izabela Furdzik</FooterLink>
      </Container>
    </Wrapper>
  );
};

export default Footer;
