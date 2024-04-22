export interface Todo {
  id: string;
  text: string;
}

export interface TodoItemProps {
  todo: Todo;
  isSelected: boolean;
  onSelect: () => void;
}

export interface SelectableTodoListProps {
  todos: Todo[];
  selectedId: string | null;
  onTodoSelect: (id: string | null) => void;
}

export interface TodoFormProps {
  addTodo: (newTodo: string) => void;
}

export interface UseSubmitTodoArgs {
  addTodo: (value: string) => void;
  resetInput: () => void;
}