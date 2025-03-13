import { Card, Flex } from "antd";
import "./index.css";
import { TodoForm, TodoList, TodoFilter } from "./feature/Todo";

function App() {
  return (
    <Flex
      justify="center"
      align="center"
      style={{ background: "gray", height: "100vh" }}
    >
      <Card className="w-[600px]">
        <Flex vertical gap={16}>
          <TodoForm />
          <TodoList />
          <TodoFilter />
        </Flex>
      </Card>
    </Flex>
  );
}

export default App;
