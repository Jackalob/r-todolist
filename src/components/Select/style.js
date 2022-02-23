import styled from 'styled-components';

export const StyledOption = styled.li`
  color: #fff;
  opacity: ${({ active }) => active === true ? 1 : 0.4 };
  margin: 0 6px;
`
export const StyledOptionWrapper = styled.ul`
  display: flex;
`