import { Button, Flex, Radio, Typography } from "antd";
import { useTodoStore } from "../../model/useTodos";
import { FilterTypeEnum } from "../../model/types";

export const TodoFilter = () => {
  const { filteredTodos, filter, setFilter, clearCompleted } = useTodoStore();

  return (
    <Flex align="center" justify="space-between">
      <Typography.Text className="w-[122px]">
        {filteredTodos.length} items left
      </Typography.Text>

      <Radio.Group
        size="small"
        value={filter}
        onChange={(e) => {
          console.log("Test: ", e.target.value);
          setFilter(e.target.value);
        }}
      >
        <Radio.Button value={FilterTypeEnum.all}>All</Radio.Button>
        <Radio.Button value={FilterTypeEnum.active}>Active</Radio.Button>
        <Radio.Button value={FilterTypeEnum.completed}>Completed</Radio.Button>
      </Radio.Group>

      <Button variant="text" size="small" onClick={clearCompleted}>
        Clear completed
      </Button>
    </Flex>
  );
};
