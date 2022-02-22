import React, { createRef } from 'react'

export default function AddTodo({ setTodos, totalLength, theme = '#045975' }) {
  const inputRef = createRef('')
  const addTodo = (e) => {
    if (e.keyCode === 13 || e.keyCode === undefined) {
      const newTodo = {
        id: totalLength + 1,
        title: inputRef.current.value,
        done: false,
      }
      setTodos(todos => [newTodo, ...todos])
      inputRef.current.value = '';
    }
  }

  const bgGradient = `linear-gradient(
    289.21deg,
    ${theme}22 0%,
    ${theme}ee 100%
  )`;
  
  return (
    <div style={{ background: bgGradient }}>
      <input type='text' ref={inputRef} onKeyDown={addTodo} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}
