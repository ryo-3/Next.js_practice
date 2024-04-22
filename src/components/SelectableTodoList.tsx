// SelectableTodoList.tsx
import React from "react";
import TodoItem from "./TodoItem";
import { SelectableTodoListProps } from "@/models/interface";

const SelectableTodoList: React.FC<SelectableTodoListProps> = ({
  todos,
  selectedId,
  onTodoSelect,
}) => {
  return (
    <div className="fixed top-32 list_area mx-5">
      <ul className="">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isSelected={todo.id === selectedId}
            onSelect={() => onTodoSelect(todo.id === selectedId ? null : todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectableTodoList;
