import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodoComplited, removeTodo }) {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodoComplited={toggleTodoComplited}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}
