import { describe, expect, it, Mock, vi } from "vitest";
import { useTodoStore } from "../../model/useTodos";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoFilter } from "./TodoFilter";
import { FilterTypeEnum } from "../../model/types";

vi.mock("../../model/useTodos", () => {
  return {
    useTodoStore: vi.fn(),
  };
});

describe("TodoFilter", () => {
  it("Написание в поле, добавление элемента", () => {
    let filter = "all";
    const setFilterMock = vi.fn((newFilter) => {
      filter = newFilter;
    });

    (useTodoStore as unknown as Mock).mockImplementation(() => ({
      filteredTodos: [],
      filter,
      setFilter: setFilterMock,
    }));

    render(<TodoFilter />);

    fireEvent.click(screen.getByText("Completed"));
    expect(setFilterMock).toHaveBeenCalledWith(FilterTypeEnum.completed);
    expect(filter).toBe(FilterTypeEnum.completed);

    fireEvent.click(screen.getByText("Active"));
    expect(setFilterMock).toHaveBeenCalledWith(FilterTypeEnum.active);
    expect(filter).toBe(FilterTypeEnum.active);

    fireEvent.click(screen.getByText("All"));
    expect(setFilterMock).toHaveBeenCalledWith(FilterTypeEnum.active);
    expect(filter).toBe(FilterTypeEnum.active);
  });
});
