import React from 'react'
import styled from 'styled-components'
import { FlexRow } from 'components/Globals'

export const StyledHeader = styled(FlexRow)`
  margin-bottom: 12px;
`

export default function Header(props) {
  return (
    <header>
      <StyledHeader {...props}>{props.children}</StyledHeader>
    </header>
  )
}
