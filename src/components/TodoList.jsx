import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  // данный хук может точечно выбрать чтонибуудь из store
  // принимает функццию
  // функция принимает store
  const todos = useSelector((state) => state.todos.todos);

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          // toggleTodoComplited={toggleTodoComplited}
          // removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
}
