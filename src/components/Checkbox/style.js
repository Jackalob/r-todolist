import styled from 'styled-components'

export const StyledCheckboxLabel = styled.label`
  margin-left: 8px;
`

export const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(255, 255, 255, .2);
  border-radius: 50%;
  position: relative;
  &::after {
    content: "";
    width: 80%;
    height: 80%;
    display: block;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    transition: all .2s ease-in-out;
  }
  &:checked {
    &::after {
      background-color: #C4DBEB;
    }
  }
  &:checked + ${StyledCheckboxLabel} {
    font-style: italic;
    text-decoration: line-through;
  }
`

