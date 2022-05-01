import React, { useState, useCallback, useMemo, useEffect } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const initialTodos = [
  { id: 1, title: 'test', done: true },
]
const getFiltered = (todos, type) => {
  let filteredTodos = [...todos]
  switch(type) {
    case 'all':
      break;
    case 'active':
      filteredTodos = todos.filter(todo => todo.done === false)
      break;
    case 'completed':
      filteredTodos = todos.filter(todo => todo.done === true)
      break;
    default: 
      break;
  }
  return filteredTodos;
}
const getUpdateTodo = (todos, updatedTodo) => {
  const index = todos.findIndex(todo => todo.id === updatedTodo.id);
  if (index === -1) return todos;
  todos[index] = updatedTodo;
  return [...todos];
}
const getFilteredTodo = (todos, targetTodo) => {
  return todos.filter(todo => todo.id !== targetTodo.id);
}

export default function TodoList({ visibleType, theme }) {
  const [todos, setTodos] = useState(() => {
    const localTodos = JSON.parse(window.localStorage.getItem('todos'))
    return localTodos || initialTodos
  })
  const filteredTodos = useMemo(
    () => getFiltered(todos, visibleType),
    [todos, visibleType]
  )
  const handleChange = useCallback((todo) => { setTodos(todos => getUpdateTodo(todos, todo)) }, [])
  const handleDelete = useCallback((todo) => { setTodos(todos => getFilteredTodo(todos, todo)) }, [])

  useEffect(() => {
    const setTodosToLocal = () => window.localStorage.setItem('todos', JSON.stringify(todos))
    setTodosToLocal()
  }, [todos])
  

  return (
    <div>
      <ul>
        { filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} totalLength={todos.length} theme={theme} />
    </div>
  )
}