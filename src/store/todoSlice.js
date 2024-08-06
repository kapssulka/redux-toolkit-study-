import { createSlice } from "@reduxjs/toolkit";

// создаём createSlice

const todoSlice = createSlice({
  // название
  name: "todos",

  // состояние, начальные значения
  initialState: {
    todos: [],
  },

  // набор методов
  reducers: {
    // принимают всегда 2 аргумента (state, action)
    // ожидается, что в action мы переданим нужные нам значения
    addTodo(state, action) {
      console.log(state);
      console.log(action);

      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        complited: false,
      });
    },
    toggleTodoComplited(state, action) {},
    removeTodo(state, action) {},
  },
});

// экспортируем несколько вещей

// экспортируем actions
export const { addTodo, toggleTodoComplited, removeTodo } = todoSlice.actions;

// экспортируем reducer (формируется из все элементов reducers)
export default todoSlice.reducer;
