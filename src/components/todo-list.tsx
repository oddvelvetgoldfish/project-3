import React from "react";
import { TodoItem } from "./todo-item";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      )}
    </div>
  );
};
