import styled from '@emotion/styled';

const Wrapper = styled.footer`
  margin-top: 3rem;
  padding: 3rem 0;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.colorMono.white};
  text-align: center;
  @media (min-width: 1000px) {
    margin-top: 5rem;
  }
`;

const FooterLink = styled.a`
  padding-bottom: .1rem;
  background-image: linear-gradient(${(props) => props.theme.color.quaternary} 0 0);
  background-position: 0 100%;
  background-size: 0 .2rem;
  background-repeat: no-repeat;
  font-weight: ${(props) => props.theme.fontWeight.semibold};
  transition: background-size .3s, background-position 0s .3s;
  &:hover {
    background-position: 100% 100%;
    background-size: 100% .2rem;
  }
`;

export {
  Wrapper,
  FooterLink
};
