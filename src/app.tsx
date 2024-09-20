import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import { Todo } from "./types";
import { TodosPage } from "./components/todos-page";
import { v4 as uuidv4 } from "uuid";
import { ContactPage } from "./components/contact-page";

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "0",
      text: "Todo 1",
      completed: false,
    },
    {
      id: "1",
      text: "Todo 2",
      completed: false,
    },
  ]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route
          path="/todos"
          element={
            <TodosPage
              todos={todos}
              toggleComplete={toggleComplete}
              removeTodo={removeTodo}
              addTodo={addTodo}
            />
          }
        />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};
