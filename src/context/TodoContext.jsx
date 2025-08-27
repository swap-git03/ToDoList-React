/* eslint-disable no-unused-vars */
// src/context/ToDoContext.jsx
import React, { createContext, useReducer, useEffect } from "react";
import { initialState, reducer } from "../reducers/todoReducer.js";

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState,
    (init) => {
      try {
        const raw = localStorage.getItem("todosBatch51");
        if (!raw) return init;

        const parsed = JSON.parse(raw);

        // Accept either:
        // 1) an object like { todos: [...] } OR
        // 2) a plain array [ ... ] (legacy)
        if (Array.isArray(parsed)) {
          return { ...init, todos: parsed };
        }
        if (parsed && Array.isArray(parsed.todos)) {
          return { ...init, todos: parsed.todos };
        }
        return init;
      } catch (err) {
        // If JSON.parse fails or anything else goes wrong, fall back to init
        return init;
      }
    }
  );

  useEffect(() => {
    try {
      // Persist the whole state object so initializer can read the same shape
      localStorage.setItem("todosBatch51", JSON.stringify(state));
    } catch (err) {
      console.warn("Could not persist todos to localStorage:", err);
    }
  }, [state]);

  // optional: remove or keep for debugging
  // console.log("ToDo state:", state);

  return (
    <ToDoContext.Provider value={{ state, dispatch }}>
      {children}
    </ToDoContext.Provider>
  );
};

export { ToDoContext, ToDoProvider };
