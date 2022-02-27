import React from 'react'
import styled from 'styled-components';

const StyledBadge = styled.div`
  min-width: 22px;
  height: 22px;
  padding: 2px 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F3BA18;
  color: #333;
  border-radius: 20px;
  font-size: 14px;
`
export default function CountBadge(props) {
  const countRef = React.useRef(0);
  return (
    <StyledBadge>
      <span>{countRef.current++}</span>
    </StyledBadge>
  )
}

