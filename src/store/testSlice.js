import { createSlice } from "@reduxjs/toolkit";

// создаём createSlice

const testSlice = createSlice({
  // название
  name: "test",

  // состояние, начальные значения
  initialState: {
    todos: [],
  },

  // набор методов
  reducers: {
    // принимают всегда 2 аргумента (state, action)
    // ожидается, что в action мы переданим нужные нам значения

    setTest(state, action) {
      console.log("Тестовый вариант");
      //   console.log(action);
    },
  },
});

// экспортируем несколько вещей

// экспортируем actions
export const { setTest } = testSlice.actions;

// экспортируем reducer (формируется из все элементов reducers)
export default testSlice.reducer;
