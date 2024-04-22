// components/TodoForm.tsx
import React from "react";
import useFormInput from "@/hooks/useFormInput";
import useSubmitTodo from "@/hooks/useSubmitTodo";
import { TodoFormProps } from "@/models/interface";

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const newTodo = useFormInput("");
  const handleSubmit = useSubmitTodo({
    addTodo,
    resetInput: () =>
      newTodo.onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>),
  });

  return (
    <form onSubmit={(e) => handleSubmit(e, newTodo.value)}>
      <input
        type="text"
        value={newTodo.value}
        onChange={newTodo.onChange}
        className="border-2 border-black rounded-md px-1.5 ss:w-48 mx-4"
      />
      <button type="submit" className="border-2 border-black px-4 rounded ">
        追加
      </button>
    </form>
  );
};

export default TodoForm;
