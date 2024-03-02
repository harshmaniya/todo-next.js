"use client"
import { useState } from "react";

const TodoApp: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Enter your todo"
          value={newTodo}
          onChange={(e: any) => setNewTodo(e.target.value)}
          className="mr-2"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            {todo}
            <button
              // variant="outline"
              // size="sm"
              onClick={() => removeTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
