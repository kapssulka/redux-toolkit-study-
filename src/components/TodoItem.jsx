import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteFetchTodos,
  toggleState,
  toggleTodoCompleted,
} from "../store/todoSlice";

export default function TodoItem({ id, title, completed }) {
  const dispatch = useDispatch();
  const handleRemove = (id) => dispatch(deleteFetchTodos(id));
  const handleToggleTodoCompleted = (id) =>
    dispatch(toggleTodoCompleted({ id }));

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleState(id))}
      />
      <span>{title}</span>
      <span className="deleted" onClick={() => handleRemove(id)}>
        &times;
      </span>
    </li>
  );
}
