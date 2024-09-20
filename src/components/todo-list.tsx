import React from "react";
import { TodoItem } from "./todo-item";
import { Todo } from "../types";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleComplete,
  removeTodo,
}) => {
  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))
      )}
    </div>
  );
};
