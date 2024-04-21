// SelectableTodoList.tsx
import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "@/types";

interface SelectableTodoListProps {
  todos: Todo[];
  selectedId: string | null;
  onTodoSelect: (id: string | null) => void;
}

const SelectableTodoList: React.FC<SelectableTodoListProps> = ({
  todos,
  selectedId,
  onTodoSelect,
}) => {
  return (
    <div className="list_area px-4">
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            isSelected={todo.id === selectedId}
            onSelect={() =>
              onTodoSelect(todo.id === selectedId ? null : todo.id)
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default SelectableTodoList;
