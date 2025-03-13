import { FilterType, FilterTypeEnum } from "../../model/types";
import { Todo } from "../../model/useTodos";

export const filterTodos = (todos: Todo[], filter: FilterType): Todo[] => {
  if (filter === FilterTypeEnum.active)
    return todos.filter((todo) => !todo.completed);
  if (filter === FilterTypeEnum.completed)
    return todos.filter((todo) => todo.completed);
  return todos; // 'all' - показывать все задачи
};
