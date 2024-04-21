// TodoItem.tsx
import React from "react";
import { TodoItemProps } from "@/models/interface";
import useTodoSelectStyle from "@/hooks/useTodoSelectStyle";
import "../css/style.css";

const TodoItem: React.FC<TodoItemProps> = ({ todo, isSelected, onSelect }) => {
  const itemStyles = useTodoSelectStyle(isSelected);

  const handleClick = () => {
    console.log(`${todo.text} isSelected: ${isSelected}`); // IDと選択状態をログ出力
    onSelect(); // onSelectを呼び出す
  };

  return (
    <li className={`${itemStyles} ${isSelected} `} onClick={handleClick}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
