import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import AddTodo from "src/pages/BlazingTodoList/components/AddTodo"

const mockedSetTodos = jest.fn()
const setup = () => render(<AddTodo setTodos={mockedSetTodos} />);

describe('AddTodo', () => {
  test('It contains input field and it has focus on mount', () => {
    setup()
    const input = screen.getByTestId("add-todo-input");

    input.focus()
    expect(input).toHaveFocus()
  })
  
  test('submission should go through successfully', () => {
    setup()
    const input = screen.getByTestId("add-todo-input");
    const button = screen.getByTestId("add-todo-btn");
  
    fireEvent.change(input, { target: { value: 'testing' } })
    fireEvent.click(button)
    expect(input).toHaveValue("");

    fireEvent.change(input, { target: { value: 'testing2' } })
    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', keyCode: 13})
    expect(mockedSetTodos).toHaveBeenCalledTimes(2)
    expect(mockedSetTodos).toHaveBeenCalledWith(expect.any(Function))
    expect(input).toHaveValue("");
  })

  test('submission should not call setTodos method if input field is empty', () => {
    setup()
    const input = screen.getByTestId("add-todo-input");
    const button = screen.getByTestId("add-todo-btn");

    fireEvent.click(button)
    fireEvent.keyDown(input, {key: 'Enter', code: 'Enter', keyCode: 13})
    expect(mockedSetTodos).not.toHaveBeenCalled()
  })
})
