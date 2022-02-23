import styled from 'styled-components';

export const A = styled.a`
  display: flex;
  flex: none;
  align-items: center;
`

export const StyledButton = styled.button`
  border-radius: 30px;
  border: 1px solid #eee;
  color: ${( color ) => color || '#fff' };
  padding: ${(size) => size === 'small' ?  '6px 12px': '10px 16px'};
`

