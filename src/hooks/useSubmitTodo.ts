// hooks/useSubmitTodo.ts
import { useCallback } from "react";
import { UseSubmitTodoArgs } from "@/models/interface";


const useSubmitTodo = ({ addTodo, resetInput }: UseSubmitTodoArgs) => {
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>, inputValue: string) => {
      event.preventDefault(); // フォームのデフォルトの送信を防ぐ
      if (inputValue.trim()) {
        // 入力値が空白でない場合
        addTodo(inputValue.trim()); // addTodo 関数を呼び出す
        resetInput(); // 入力値をリセットする関数を呼び出す
      }
    },
    [addTodo, resetInput]
  );

  return handleSubmit;
};

export default useSubmitTodo;
