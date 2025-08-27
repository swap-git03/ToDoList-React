import React, { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  const { state, dispatch } = useContext(ToDoContext);

  return (
    <section className="list-wrap">
      <div className="list-head">
        <h2>All Tasks</h2>
        <div>
          <button
            className="btn small danger"
            onClick={() => dispatch({ type: "CLEAR_ALL" })}
            disabled={state.todos.length === 0}
          >
            Clear All
          </button>
        </div>
      </div>

      {state.todos.length === 0 ? (
        <div className="empty">No tasks yet — add your first task!</div>
      ) : (
        <div className="grid">
          {state.todos.map((todo) => (
            <article
              key={todo.id}
              className={`card todo-card ${todo.isComplete ? "complete" : ""}`}
            >
              <div className="card-top">
                <h3 className="todo-title">{todo.name}</h3>
                <div className="status">
                  {todo.isComplete ? "Completed" : "Pending"}
                </div>
              </div>
              <p className="todo-desc">
                {todo.description || "No description provided."}
              </p>

              <div className="card-actions">
                <button
                  className="btn small"
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                >
                  {todo.isComplete ? "Mark Pending" : "Mark Done"}
                </button>
                <button
                  className="btn small danger"
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo.id })
                  }
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default ToDoList;
