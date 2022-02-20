import React from 'react'

export default function CountBadge() {
  const countRef = React.useRef(0);
  return (
    <span>{countRef.current++}</span>
  )
}
