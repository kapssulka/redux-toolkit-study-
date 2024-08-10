import { useEffect, useState } from "react";
import "./App.scss";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

import { useDispatch, useSelector } from "react-redux";
import { addStateTodo, addTodo, fetchTodos } from "./store/todoSlice";

function App() {
  const [text, setText] = useState("");
  const { status, error } = useSelector((state) => state.todos);

  // возвращает функцию
  const dispatch = useDispatch();
  // мы должны вписать ту функцию, которую нужно вытащить из reducer
  const addTask = () => {
    dispatch(addStateTodo(text));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTask} />
      {status === "loading" && (
        <h2 style={{ marginTop: "30px", marginBottom: "30px" }}>Loading...</h2>
      )}

      {error && <h2>{error}</h2>}
      <TodoList />
    </div>
  );
}

export default App;
