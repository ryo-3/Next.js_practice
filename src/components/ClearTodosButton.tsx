// 削除ボタンを実装するコンポーネント
import React from "react";

interface ClearTodosButtonProps {
  clearTodos: () => void; // Toddoをクリアする関数
}

const ClearTodosButton: React.FC<ClearTodosButtonProps> = ({ clearTodos }) => {
  return (
    <button
      onClick={() => {
        if (window.confirm("本当にすべてのTodoを削除してもよろしいですか？")) {
          clearTodos();
        }
      }}
      className="fixed bottom-4 right-8 bg-red-500 text-white px-4 py-2 hover:bg-red-600 items-center rounded 600:px-2 600:right-3"
    >
      全削除
    </button>
  );
};

export default ClearTodosButton;
