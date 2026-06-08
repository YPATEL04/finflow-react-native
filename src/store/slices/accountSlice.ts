import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AccountState {
  balance: number;
  income: number;
  expenses: number;
}

const initialState: AccountState = {
  balance: 124850,
  income: 85000,
  expenses: 35150,
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    updateBalance: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.balance = action.payload;
    },

    updateIncome: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.income = action.payload;
    },

    updateExpenses: (
      state,
      action: PayloadAction<number>,
    ) => {
      state.expenses = action.payload;
    },
  },
});

export const {
  updateBalance,
  updateIncome,
  updateExpenses,
} = accountSlice.actions;

export default accountSlice.reducer;