// TodoManager.tsx
import React, { useState } from "react";
import useLocalStorage from "@/components/useLocalStorage";
import TodoForm from "@/components/TodoForm";
import Pagination from "./pagination";
import { v4 as uuidv4 } from "uuid";
import ClearTodosButton from "@/components/ClearTodosButton";
import SelectableTodoList from "./SelectableTodoList";
import { Todo } from "@/models/interface";

const TodoManager: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>("todos", []);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 18;
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const addTodo = (newTodoText: string) => {
    if (newTodoText !== "") {
      const newTodo: Todo = {
        id: uuidv4(),
        text: newTodoText.trim(),
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const indexOfLastTodo = currentPage * itemsPerPage;
  const indexOfFirstTodo = indexOfLastTodo - itemsPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const clearTodos = () => setTodos([]);
  const clearSelection = () => {
    console.log("Nav clicked, clearing selection");
    setSelectedId(null);
  };

  return (
    <div className="">
      <TodoForm addTodo={addTodo} />
      <SelectableTodoList
        todos={currentTodos}
        selectedId={selectedId}
        onTodoSelect={setSelectedId}
      />
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={todos.length}
        paginate={paginate}
        onNavClick={clearSelection}
      />
      <ClearTodosButton clearTodos={clearTodos} />
    </div>
  );
};

export default TodoManager;
