import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  it("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add a todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(button);

    expect(screen.getByText("Write Tests")).toBeInTheDocument(); 
  });

  it("toggles a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");

    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  it("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling; // Delete button is inside <li>

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
