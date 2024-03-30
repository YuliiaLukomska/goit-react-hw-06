import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  name: "",
};

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: "filters",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    changeFilter(state, action) {},
  },
});

// Генератори action-creators
export const {} = filtersSlice.actions;

// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
