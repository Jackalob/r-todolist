import React from 'react'

export default function Todo({ todo, onChange }) {
  const handleChange = (e) => {
    const { done , ...others} = todo
    onChange({ done: !done, ...others });
  }
  return (
    <li>
      <input
        type="checkbox"
        defaultChecked={todo.done}
        onChange={handleChange}
      />
      <span>{ todo.title }</span>
      <span>remove button</span>
      <span>render count: 0</span>
    </li>
  )
}
