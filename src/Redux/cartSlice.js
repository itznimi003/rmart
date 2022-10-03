import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
 
    },
    removeProduct: (state, action) => {
        const removeItem = state.products.filter((x)=> x.id !== action.payload.id);
        
        state.quantity -= 1;
        state.total -= action.payload.price * action.payload.quantity;
        state.products = removeItem;
  
      },
    reset: (state) => {
      state.products = [];
      
    },
  },
});

export const { addProduct,removeProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;