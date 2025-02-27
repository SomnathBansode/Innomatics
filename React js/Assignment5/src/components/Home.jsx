import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("Todo")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("Todo", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;

    const newTask = {
      id: Math.random(),
      title: newTodo,
      description: description || "No description",
      completed: false, // Add this line
    };

    setTodos([...todos, newTask]);
    localStorage.setItem("Todo", JSON.stringify([...todos, newTask]));
    setNewTodo("");
    setDescription("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem("Todo", JSON.stringify(updatedTodos));
  };

  const handleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("Todo", JSON.stringify(updatedTodos));
  };

  return (
    <div className="container">
      <h2>Todo List</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter title"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="add">
          Add Task
        </button>
      </form>
      <div className="todo-container">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <p>{todo.title}</p>
              <div className="action-buttons">
                <button
                  className="complete-btn btn"
                  onClick={() => handleComplete(todo.id)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <Link to={`/view/${todo.id}`} className="view-btn btn">
                  View
                </Link>
                <Link to={`/edit/${todo.id}`} className="edit-btn btn">
                  Edit
                </Link>
                <button
                  className="delete btn"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
