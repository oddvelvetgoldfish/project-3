import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import { Todo } from "./types";
import { TodoList } from "./components/todo-list";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      text: "Todo 1",
      completed: false,
    },
    {
      id: 1,
      text: "Todo 2",
      completed: false,
    },
  ]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/todos" />} />
        <Route path="/todos" element={<TodoList todos={todos} />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </Router>
  );
};

export default App;
