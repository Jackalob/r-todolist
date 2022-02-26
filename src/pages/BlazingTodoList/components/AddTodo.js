import React, { createRef } from 'react'
import { getBlockGradient } from 'components/Globals'
import { NewTodo } from '../style'

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
  
  return (
    <NewTodo style={{ background: getBlockGradient(theme) }}>
      <input
        type='text'
        ref={inputRef}
        onKeyDown={addTodo}
        placeholder='Add Todo'
      />
      <button onClick={addTodo}>Add</button>
    </NewTodo>
  )
}
