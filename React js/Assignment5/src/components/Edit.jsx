import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todoItem, setTodoItem] = useState({ title: "", description: "" });

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("Todo")) || [];
    const foundTodo = todos.find((item) => item.id === parseFloat(id));

    if (foundTodo) {
      setTodoItem(foundTodo);
    }
  }, [id]);

  const handleChange = (e) => {
    setTodoItem({ ...todoItem, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const todos = JSON.parse(localStorage.getItem("Todo")) || [];
    const updatedTodos = todos.map((item) =>
      item.id === parseFloat(id) ? todoItem : item
    );

    localStorage.setItem("Todo", JSON.stringify(updatedTodos));
    navigate("/");
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Edit Todo</h2>
        <input
          type="text"
          name="title"
          value={todoItem.title}
          onChange={handleChange}
          placeholder="Enter todo title"
        />
        <input
          type="text"
          name="description"
          value={todoItem.description}
          onChange={handleChange}
          placeholder="Enter description"
        />
        <div className="action-buttons">
          <button className="back-btn btn" onClick={handleSave}>
            Save
          </button>
          <button className="back-btn btn" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;
