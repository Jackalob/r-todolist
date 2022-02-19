import React, { createRef } from 'react'

export default function AddTodo({ setTodos, totalLength }) {
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
  return (
    <div>
      <input type='text' ref={inputRef} onKeyDown={addTodo} />
      <button onClick={addTodo}>Add</button>
    </div>
  )
}
