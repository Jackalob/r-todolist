import React from 'react'
import CountBadge from '../../../components/CountBadge';

export default function Todo({ todo, onChange, theme = '#045975' }) {
  const handleChange = (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others });
  }

  const bgGradient = `linear-gradient(
    289.21deg,
    ${theme}22 0%,
    ${theme}ee 100%
  )`;

  return (
    <li style={{ background: bgGradient }}>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onChange={handleChange}
      />
      <span>{ todo.title }</span>
      <span>remove button</span>
      <span>
        <CountBadge />
      </span>
    </li>
  )
}
