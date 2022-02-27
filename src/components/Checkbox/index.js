import React from 'react'
import { StyledCheckbox, StyledCheckboxLabel  } from './style'



export default function Checkbox(props) {
  return (
    <StyledCheckbox {...props}>{props.children}</StyledCheckbox>
  )
}

export const CheckboxLabel = (props) => {
  return (
    <StyledCheckboxLabel {...props}>{props.children}</StyledCheckboxLabel>
  )
}