import React, { useState } from "react";
import { TodoList } from "../components/todo-list";
import { Todo } from "../types";
import { TodoForm } from "./todo-form";

type Filter = "all" | "completed" | "incomplete";

interface TodosPageProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  removeTodo: (id: string) => void;
  addTodo: (text: string) => void;
}
export const TodosPage: React.FC<TodosPageProps> = ({
  todos,
  toggleComplete,
  removeTodo,
  addTodo,
}) => {
  const [filter, setFilter] = useState<Filter>("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <TodoForm addTodo={addTodo} />
      <div className="w-full">
        <div className="filter-buttons">
          <button
            className={`filter-button ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-button ${filter === "completed" ? "active" : ""}`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={`filter-button ${filter === "incomplete" ? "active" : ""}`}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
        <TodoList
          todos={filteredTodos}
          toggleComplete={toggleComplete}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
};
