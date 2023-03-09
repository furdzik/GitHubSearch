import styled from '@emotion/styled';

const Wrapper = styled.input`
  border: 2px solid ${(props) => props.theme.layout.borderColor};
  background: ${(props) => props.theme.colorMono.white};
  height: 6rem;
  padding: 0 3rem;
  width: 100%;
`;

export {
  Wrapper
};
