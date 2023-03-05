import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const NoItemsWrapper = styled.div`
  color: ${(props) => props.theme.colorText.secondary};
  text-align: center;
`;

export {
  Wrapper,
  NoItemsWrapper
};
