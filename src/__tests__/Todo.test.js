import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Todo from "src/pages/BlazingTodoList/components/Todo"

const mockedTodo = {
  id: 100,
  title: 'testing',
  done: false
}
const markCompleted = jest.fn();
const removeTodo = jest.fn();
const setup = () => render(
  <Todo
    todo={mockedTodo}
    onChange={markCompleted}
    onDelete={removeTodo}
  />
)

describe('Todo', () => {
  test('Todo is marked completed on checkbox click', () => {
    setup()
    const checkbox = screen.getByTestId("todo-checkbox")

    expect(checkbox.checked).toEqual(false)

    fireEvent.click(checkbox)
    expect(checkbox.checked).toEqual(true)
    expect(markCompleted).toHaveBeenCalledTimes(1)
    expect(markCompleted).toHaveBeenCalledWith({...mockedTodo, done: !mockedTodo.done })
  })

  test('Todo will be removed after clicking remove button', () => {
    setup()
    const removeBtn = screen.getByTestId("todo-remove-button")

    fireEvent.click(removeBtn)
    expect(removeTodo).toBeCalledTimes(1)
    expect(removeTodo).toBeCalledWith(mockedTodo)
  })
})

