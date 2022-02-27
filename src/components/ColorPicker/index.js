import React, { useState } from 'react'
import styled from 'styled-components'
import color from 'color'

const StyledPicker = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 50%;
`

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
`

export default function ColorPicker({ theme, setTheme }) {
  const getThemeColor = () => {
    return color(theme).darken(0.2)
  }
  const changeHandler = (e) => {
    setTheme(e.target.value)
    console.log(color(e.target.value))
  }

  return (
    <StyledPicker style={{ backgroundColor: getThemeColor() }}>
      <StyledInput type="color" onChange={changeHandler} />
    </StyledPicker>
  )
}