import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  border-radius: ${( size ) => size === 'small' ? '4px': '8px' };
  padding: ${({ size }) => size === 'small' ? '6px 12px': '10px 16px'};
`

export default function BlockWrapper(props) {
  return (
    <StyledWrapper {...props}>{props.children}</StyledWrapper>
  );
};
