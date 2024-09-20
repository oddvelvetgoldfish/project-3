import React, { useState } from "react";

interface TodoFormProps {
  addTodo: (text: string) => void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className="todo-form">
      <h2 className="mb-4 text-xl font-bold">Add New Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="contact-input"
          placeholder="Enter todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className="submit-button">
          Add Todo
        </button>
      </form>
    </div>
  );
};
