import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalProducts: 0,
  },
  reducers: {
    addToCart(state, action) {},
    removeFromCart(state, action) {},
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
