import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todo")) || [];
    const foundTodo = todos.find((item) => item.id === parseFloat(id));
    setTodo(foundTodo);
  }, [id]);

  if (!todo) {
    return <h2 className="container">Todo not found</h2>;
  }

  return (
    <div className="container view-container">
      <div className="card">
        <h2>View Task</h2>
        <p>
          <strong>Title:</strong> {todo.title || "Untitled Task"}
        </p>
        <p>
          <strong>Description:</strong>{" "}
          {todo.description || "No description added."}
        </p>
        <Link to="/" className="back-btn">
          Back
        </Link>
      </div>
    </div>
  );
};

export default View;
