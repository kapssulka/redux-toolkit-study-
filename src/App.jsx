import { useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        { id: new Date().toISOString(), text, complited: false },
      ]);

      setText("");
    }
  };

  const toggleTodoComplited = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== todoId) return todo;

        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id != todoId));
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />

      <TodoList
        todos={todos}
        toggleTodoComplited={toggleTodoComplited}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
