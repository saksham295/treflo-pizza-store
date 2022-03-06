import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  pizzas: [],
};

// A slice for pizzas with our three reducers
const pizzaSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    getPizzas: (state) => {
      state.loading = true;
    },
    getPizzasSuccess: (state, { payload }) => {
      state.pizzas = payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getPizzasFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getPizzas, getPizzasSuccess, getPizzasFailure } =
  pizzaSlice.actions;

export const pizzaSelector = (state) => state.pizzas;

export default pizzaSlice.reducer;

// Asynchronous thunk action
export function fetchPizzas() {
  return async (dispatch) => {
    dispatch(getPizzas());

    try {
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await response.json();

      dispatch(getPizzasSuccess(data));
    } catch (error) {
      dispatch(getPizzasFailure());
    }
  };
}
