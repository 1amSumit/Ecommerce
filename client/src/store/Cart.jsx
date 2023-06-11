import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
    totalProducts: 0,
    hasItem: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const exixtingItem = state.items.find((item) => item.id === newItem.id);

      console.log(exixtingItem);

      if (!exixtingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          amount: 1,
          imageUrl: newItem.imageUrl,
          description: newItem.description,
        });
        state.totalProducts++;
        state.hasItem = true;
      }
    },
    removeFromCart(state, action) {},
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
