import React, { act, useReducer, useState } from "react";
import "./Example1.css";
import TodoList from "./TodoList";

export const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  TOGGLE_DELETE: "delete-todo",
};
function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.TOGGLE_DELETE:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

const Todo = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todos);
  return (
    <div>
      <h4>Todo</h4>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <TodoList key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Todo;
