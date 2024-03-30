/* слайсер генерує екшн-кріейтори та редюсер одночасно (типу може одночасно і команди 
згенеруватии і цехи, які ці команди будуть виконувати)*/

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [],
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      //   push це мутабельна зміна масиву, тому ретьорн нетреба
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      // filter це іммутабельний метод, він немутує масив, а створює новий масив. Тому нам треба цей масив повернути.
      return state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Генератори action-creators
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
