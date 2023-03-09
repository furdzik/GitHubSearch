import styled from '@emotion/styled';

import Input from 'components/Input';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  margin-bottom: 3rem;
`;

const StyledInput = styled(Input)`
  flex: 1 1 auto;
  width: auto;
`;

export {
  Wrapper,
  StyledInput
};
