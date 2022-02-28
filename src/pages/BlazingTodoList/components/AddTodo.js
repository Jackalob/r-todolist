import React, { createRef } from 'react'
import { getBlockGradient } from 'src/components/Globals'
import { Button } from 'src/components/Button'
import { NewTodo } from '../style'

export default function AddTodo({ setTodos, totalLength, theme = '#045975' }) {
  const inputRef = createRef('')
  const addTodo = (e) => {
    if (e.keyCode === 13 || e.keyCode === undefined) {
      const text = inputRef.current.value;
      const newTodo = {
        id: totalLength + 1,
        title: text,
        done: false,
      }
      if (text !== '') {
        setTodos(todos => [...todos, newTodo])
        inputRef.current.value = '';
      }
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
      <Button onClick={addTodo}>Add</Button>
    </NewTodo>
  )
}
