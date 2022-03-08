import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  pizzas: [],
};

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
    },
  },
});

export const { getPizzas, getPizzasSuccess, getPizzasFailure } =
  pizzaSlice.actions;

export const pizzaSelector = (state) => state.pizzas;

export default pizzaSlice.reducer;

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

export function sortByPrice() {
  return async (dispatch) => {
    dispatch(getPizzas());

    try {
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await response.json();

      data?.sort((a, b) => (a.price > b.price ? 1 : -1));

      dispatch(getPizzasSuccess(data));
    } catch (error) {
      dispatch(getPizzasFailure());
    }
  };
}

export function sortByRating() {
  return async (dispatch) => {
    dispatch(getPizzas());

    try {
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await response.json();

      data?.sort((a, b) => (a.rating < b.rating ? 1 : -1));

      dispatch(getPizzasSuccess(data));
    } catch (error) {
      dispatch(getPizzasFailure());
    }
  };
}

export function sortVeg() {
  return async (dispatch) => {
    dispatch(getPizzas());

    try {
      const response = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await response.json();

      data?.filter((pizza) => pizza.isVeg === true);

      dispatch(getPizzasSuccess(data));
    } catch (error) {
      dispatch(getPizzasFailure());
    }
  };
}
