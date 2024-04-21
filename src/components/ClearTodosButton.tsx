// ClearTodosButton.tsx
import React from "react";
import { ClearButtonStyles } from "./styles/ClearButtonStyle";

interface ClearTodosButtonProps {
  clearTodos: () => void;
  className?: string; // スタイリングのためのクラス名をオプショナルで受け取る
}

const ClearTodosButton: React.FC<ClearTodosButtonProps> = ({ clearTodos, className = "" }) => {
  return (
    <button
      onClick={() => {
        if (window.confirm("本当にすべてのTodoを削除してもよろしいですか？")) {
          clearTodos();
        }
      }}
      className={`${ClearButtonStyles } ${className}`}
    >
      全削除
    </button>
  );
};

export default ClearTodosButton;
