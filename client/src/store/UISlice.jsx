import { createSlice } from "@reduxjs/toolkit";

const UiSlice = createSlice({
  name: "ui-slice",
  initialState: {
    addedToCart: false,
  },
  reducers: {
    addToCartBtn(state) {
      state.addedToCart = true;
    },
  },
});

export const UiAction = UiSlice.actions;

export default UiSlice;
