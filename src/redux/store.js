import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "./slices/pizzaSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
});

export default store;
