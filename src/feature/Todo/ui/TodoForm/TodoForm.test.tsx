import { describe, expect, it, Mock, vi } from "vitest";
import { useTodoStore } from "../../model/useTodos";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoForm } from "./TodoForm";

vi.mock("../../model/useTodos", () => {
  return {
    useTodoStore: vi.fn(),
  };
});

describe("TodoForm", () => {
  it("Написание в поле, добавление элемента", () => {
    const addTodoMock = vi.fn();

    (useTodoStore as unknown as Mock).mockImplementation(() => ({
      addTodo: addTodoMock,
    }));

    render(<TodoForm />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: "Task 1" } });
    expect(input).toHaveValue("Task 1");

    fireEvent.submit(form);
    expect(input).toHaveValue("");
    expect(addTodoMock).toHaveBeenCalledWith("Task 1");
  });

  it("Проверка пустого значения", () => {
    const addTodoMock = vi.fn();

    (useTodoStore as unknown as Mock).mockImplementation(() => ({
      addTodo: addTodoMock,
    }));

    render(<TodoForm />);

    const input = screen.getByPlaceholderText("What needs to be done?");
    const form = screen.getByTestId("form");

    fireEvent.change(input, { target: { value: " " } });

    fireEvent.submit(form);
    expect(addTodoMock).toHaveBeenCalledTimes(0);
  });
});
