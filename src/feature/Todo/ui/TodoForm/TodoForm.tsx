import { Input } from "antd";
import { useTodoStore } from "../../model/useTodos";
import { FormEvent, useState } from "react";

export const TodoForm = () => {
  const { addTodo } = useTodoStore();
  const [value, setValue] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={onSubmit} data-testid="form">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="What needs to be done?"
      />
    </form>
  );
};
