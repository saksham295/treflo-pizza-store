import { configureStore } from "@reduxjs/toolkit";
import pizzasReducer from "../redux/pizzas/pizzaSlice";

export const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  },
});

export default store;
