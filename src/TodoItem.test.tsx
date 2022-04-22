import { describe, expect, test } from "vitest";
import "@testing-library/jest-dom";
import TodoItem, { Todo } from "./TodoItem";

import { render, screen } from "@testing-library/react";

describe("Simple working test", () => {
  const testText = "testtext";
  const todo: Todo = {
    id: 1,
    text: testText,
    checked: false,
  };
  const emptyOnCheckTodo = () => console.log("emptyOnCheckTodo");

  test("Should render correctly", () => {
    const { container } = render(
      <TodoItem todo={todo} onCheckTodo={emptyOnCheckTodo} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test("Should display text", () => {
    render(
      <TodoItem todo={todo} onCheckTodo={emptyOnCheckTodo} />,
    );

    expect(screen.getByText(testText)).toBeInTheDocument();
  });

  test("Should display unchecked checkbox", () => {
    const { container } = render(
      <TodoItem todo={todo} onCheckTodo={emptyOnCheckTodo} />,
    );

    expect(container.querySelector("input")).not.toBeChecked();
  });
});
