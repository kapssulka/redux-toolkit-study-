import React from "react";

export default function TodoItem({
  id,
  text,
  complited,
  toggleTodoComplited,
  removeTodo,
}) {
  return (
    <li>
      <input
        type="checkbox"
        checked={complited}
        onChange={() => toggleTodoComplited(id)}
      />
      <span>{text}</span>
      <span className="deleted" onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
}
