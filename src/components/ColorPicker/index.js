import React from 'react'
import styled from 'styled-components'

const StyledPicker = styled.div`
  margin-right: 12px;
`

export default function ColorPicker() {
  return (
    <StyledPicker>
        <input type="color" />
    </StyledPicker>
  )
}