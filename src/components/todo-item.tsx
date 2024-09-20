import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <div className="todo-item">
      <span
        className={todo.completed ? "completed" : ""}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.text}
      </span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};
