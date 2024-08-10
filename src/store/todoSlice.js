import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );

      if (!response.ok) throw new Error("Server Error!");

      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFetchTodos = createAsyncThunk(
  "todos/deleteFetchTodos",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json", // Тип контента
          },
        }
      );

      if (!response.ok) throw new Error("Error Delete!");
      dispatch(removeTodo({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const toggleState = createAsyncThunk(
  "todos/toggleState",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const todo = getState().todos.todos.find((todo) => todo.id == id);
      const responce = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json", // Тип контента
          },
          body: JSON.stringify({
            comppleted: !todo.complited,
          }),
        }
      );

      if (!responce.ok) throw new Error("Error Delete");

      dispatch(toggleTodoCompleted({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addStateTodo = createAsyncThunk(
  "todos/addStateTodo",
  async function name(text, { rejectWithValue, dispatch }) {
    try {
      const todo = {
        title: text,
        userId: 1,
        completed: false,
      };
      const responce = await fetch(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Тип контента
          },
          body: JSON.stringify(todo),
        }
      );
      if (!responce.ok) throw new Error("Error Delete");

      const dataTodo = await responce.json();

      dispatch(addTodo(dataTodo));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// создаём createSlice

const todoSlice = createSlice({
  // название
  name: "todos",

  // состояние, начальные значения
  initialState: {
    todos: [],
    status: null,
    error: null,
  },

  // набор методов
  reducers: {
    // принимают всегда 2 аргумента (state, action)
    // ожидается, что в action мы переданим нужные нам значения

    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    toggleTodoCompleted(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo.id !== action.payload.id) return todo;

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "resolved";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })

      // deleteFetchTodos
      .addCase(deleteFetchTodos.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      .addCase(toggleState.fulfilled, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

// экспортируем несколько вещей

// экспортируем actions
export const { addTodo, toggleTodoCompleted, removeTodo } = todoSlice.actions;

// экспортируем reducer (формируется из все элементов reducers)
export default todoSlice.reducer;
