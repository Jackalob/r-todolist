import React from 'react'
import styled from 'styled-components'

const RoundCard = styled.div`
  border-radius: 8px;
  padding: 16px;
`

export default function Card(props) {
  return (
    <RoundCard {...props}>{props.children}</RoundCard>
  )
}
