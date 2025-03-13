import { describe, expect, it, Mock, vi } from "vitest";
import { useTodoStore } from "../../model/useTodos";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";

vi.mock("../../model/useTodos", () => {
  return {
    useTodoStore: vi.fn(),
  };
});

describe("TodoList", () => {
  it("рендерит задачи и вызывает toggleTodo при клике", () => {
    const mockToggleTodo = vi.fn();

    (useTodoStore as unknown as Mock).mockImplementation(() => ({
      filteredTodos: [
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: true },
      ],
      toggleTodo: mockToggleTodo,
    }));

    render(<TodoList />);

    // Проверяем, что задачи рендерятся
    expect(screen.getByText("Task 1")).toBeInTheDocument();
    expect(screen.getByText("Task 2")).toBeInTheDocument();

    // Проверяем, что вызвались нужные действия
    fireEvent.click(screen.getByText("Task 1"));
    expect(mockToggleTodo).toHaveBeenCalledWith(1);

    fireEvent.click(screen.getByText("Task 2"));
    expect(mockToggleTodo).toHaveBeenCalledWith(2);
  });
});
