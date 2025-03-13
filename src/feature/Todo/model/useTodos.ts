import { create, StateCreator } from "zustand";
import { FilterType } from "./types";
import { filterTodos } from "../utils/filterTodos/filterTodos";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoStore {
  todos: Todo[];
  filteredTodos: Todo[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  clearCompleted: () => void;
}

export const todoStoreCreator: StateCreator<TodoStore> = (set) => ({
  todos: [],
  filteredTodos: [],
  filter: "all",
  addTodo: (text) =>
    set((state) => {
      const newTodo = { id: Date.now(), text, completed: false };
      const newTodos = [...state.todos, newTodo];
      return {
        todos: newTodos,
        filteredTodos: filterTodos(newTodos, state.filter),
      };
    }),
  toggleTodo: (id) =>
    set((state) => {
      const updatedTodos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        todos: updatedTodos,
        filteredTodos: filterTodos(updatedTodos, state.filter),
      };
    }),
  setFilter: (filter) =>
    set((state) => {
      return {
        filter,
        filteredTodos: filterTodos(state.todos, filter),
      };
    }),
  clearCompleted: () =>
    set((state) => {
      const newTodos = state.todos.filter((todo) => !todo.completed);

      return {
        todos: newTodos,
        filteredTodos: filterTodos(newTodos, state.filter),
      };
    }),
});

export const useTodoStore = create(todoStoreCreator);
