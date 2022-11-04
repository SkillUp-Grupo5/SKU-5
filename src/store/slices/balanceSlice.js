import { createSlice } from "@reduxjs/toolkit";

export const balanceSlice = createSlice({
  name: "balance",
  initialState: {
    charges: 0,
    expenses: 0,
    total: 0,
  },
  reducers: {
    addCharges: (state, action) => {
      state.charges += action.payload;
      state.total += action.payload;
    },
    addExpenses: (state, action) => {
      state.expenses += action.payload;
      state.total -= action.payload;
    },
    addTotal: (state, action) => {
      state.total = action.payload;
    },
  },
});

export const { addCharges, addExpenses, addTotal } = balanceSlice.actions;
