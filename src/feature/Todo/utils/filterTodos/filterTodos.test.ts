import { FilterTypeEnum } from "../../model/types";
import { Todo } from "../../model/useTodos";
import { filterTodos } from "./filterTodos";

describe("FilterTodos", () => {
  const mockTodos: Todo[] = [
    {
      id: 1,
      text: "Task 1",
      completed: false,
    },
    {
      id: 2,
      text: "Task 2",
      completed: true,
    },
  ];

  it("фильтрует все задачи для фильтра 'all'", () => {
    const result = filterTodos(mockTodos, FilterTypeEnum.all);
    expect(result).toEqual(mockTodos);
  });

  it("фильтрует завершенные задачи для фильтра 'completed'", () => {
    const result = filterTodos(mockTodos, FilterTypeEnum.completed);
    expect(result).toEqual([mockTodos[1]]);
  });

  it("фильтрует активные задачи для фильтра 'active'", () => {
    const result = filterTodos(mockTodos, FilterTypeEnum.active);
    expect(result).toEqual([mockTodos[0]]);
  });
});
