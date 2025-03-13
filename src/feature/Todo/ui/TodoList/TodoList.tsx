import { Checkbox, Empty, Flex } from "antd";
import { useTodoStore } from "../../model/useTodos";

export const TodoList = () => {
  const { filteredTodos, toggleTodo } = useTodoStore();

  if (!filteredTodos.length) {
    return (
      <Flex className="h-[200px]" justify="center" align="center">
        <Empty />
      </Flex>
    );
  }

  return (
    <Flex vertical gap={8} className="h-[200px] overflow-y-auto">
      {filteredTodos.map((todo) => (
        <Flex align="center" gap={8} key={todo.id}>
          <Checkbox
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </Checkbox>
        </Flex>
      ))}
    </Flex>
  );
};
