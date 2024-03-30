import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
// у властивості reducer буде state нашого додатку
// в редюсері ми можемо писати мутабельний код, бо він все одно буде оброблений Immer.js, який в результаті зробить цей код іммутабельним.
const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export default store;
