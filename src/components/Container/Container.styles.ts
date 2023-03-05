import styled from '@emotion/styled';

const Wrapper = styled.div`
  max-width: ${(props) => props.theme.layout.width / 10}rem;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.layout.padding / 10}rem;

  @media (min-width: 500px) {
    padding-right: ${(props) => props.theme.layout.paddingDesktop / 10}rem;
    padding-left: ${(props) => props.theme.layout.paddingDesktop / 10}rem;
  }
`;

export {
  Wrapper
};
