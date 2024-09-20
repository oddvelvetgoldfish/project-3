import React from "react";
import { Todo } from "../types";

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className="todo-item">
      <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
    </div>
  );
};
