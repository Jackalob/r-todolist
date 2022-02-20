import React from 'react'
import CountBadge from '../../../components/CountBadge';

export default function Todo({ todo, onChange }) {
  const handleChange = (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others });
  }
  // const bgGradient = `linear-gradient(
  //   289.21deg,
  //   ${themeColor}22 8%,
  //   ${themeColor}ee 100%
  // )`
  return (
    <li>
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
