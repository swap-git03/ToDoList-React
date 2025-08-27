import React, { useContext, useState } from "react";
import { ToDoContext } from "./context/TodoContext";
import { useNavigate } from "react-router-dom";


const ToDoForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { dispatch } = useContext(ToDoContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim()) return;
    const payload = { name: name.trim(), description: description.trim() };
    dispatch({ type: "ADD_TODO", payload });
    setName("");
    setDescription("");
    navigate("/");
  }

  return (
    <section className="form-wrap card-shadow">
      <h1 className="title">Create New Task</h1>
      <form onSubmit={handleSubmit} className="todo-form">
        <label className="label">Task Name</label>
        <input
          type="text"
          className="input"
          placeholder="e.g., Learn React"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label className="label">Description</label>
        <textarea
          className="input textarea"
          placeholder="Details about the task"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="form-actions">
          <button type="submit" className="btn primary">
            Add Task
          </button>
          <button
            type="button"
            className="btn ghost"
            onClick={() => {
              setName("");
              setDescription("");
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default ToDoForm;
