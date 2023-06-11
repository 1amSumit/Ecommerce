import { configureStore } from "@reduxjs/toolkit";
import UiSlice from "./UISlice";

import cartSlice from "./Cart";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, Ui: UiSlice.reducer },
});

export default store;
