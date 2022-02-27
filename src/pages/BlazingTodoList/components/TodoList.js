import React, { useState } from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo'

const initialTodos = [{ id: 1, title: 'test', done: true }]
const getFiltered = (todos, type) => {
  let filteredTodos = todos
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
  const [todos, setTodos] = useState(initialTodos)
  const filteredTodos = getFiltered(todos, visibleType)
  const handleChange = (todo) => { setTodos(todos => getUpdateTodo(todos, todo)) }
  const handleDelete = (todo) => { setTodos(todos => getFilteredTodo(todos, todo)) }
  return (
    <div>
      <ul>
        { filteredTodos.map(todo => (
          <Todo
            key={todo.id}
            todo={todo}
            theme={theme}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo setTodos={setTodos} totalLength={todos.length} theme={theme} />
    </div>
  )
}