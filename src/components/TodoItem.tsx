// TodoItem.tsx
import React from "react";
import { Todo } from "@/types";
import "../css/style.css";

interface TodoItemProps {
  todo: Todo;
  isSelected: boolean; // 選択状態
  onSelect: () => void; // イベントハンドラを単純化
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, isSelected, onSelect }) => {
  const itemStyles = isSelected ? "bg-blue-100" : "";

  const handleClick = () => {
    console.log(`${todo.text} isSelected: ${isSelected}`); // IDと選択状態をログ出力
    onSelect(); // onSelectを呼び出す
  };

  return (
    <li
      className={`${itemStyles} cursor-pointer `}
      onClick={handleClick}
    >
      {todo.text}
    </li>
  );
};

export default TodoItem;
