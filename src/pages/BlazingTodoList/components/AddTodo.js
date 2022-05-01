import React, { createRef } from 'react'
import { Button } from 'src/components/Button'
import { NewTodo } from '../style'

export default function AddTodo({ setTodos, totalLength }) {
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
    <NewTodo>
      <input
        type='text'
        ref={inputRef}
        onKeyDown={addTodo}
        placeholder='Add Todo'
        data-testid="add-todo-input"
      />
      <Button onClick={addTodo} data-testid="add-todo-btn">Add</Button>
    </NewTodo>
  )
}
