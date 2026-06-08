import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { transactionService } from '../../services/transactionService';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

interface TransactionState {
  transactions: Transaction[];
}

interface TransactionState {
  transactions: Transaction[];
  loading: boolean;
  error: string | null;
  users: any;
}

const initialState: TransactionState = {
  transactions: [],
  loading: false,
  error: null,
  users: null,
};

export const fetchTransactions =
  createAsyncThunk(
    'transactions/fetchTransactions',
    async (_, thunkAPI) => {
      try {
        const response =
          await transactionService.getTransactions();

        return response;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(
          error.message,
        );
      }
    },
  );

export const fetchUsers = createAsyncThunk(
  'transactions/fetchUsers',
  async (_, thunkAPI) => {
    try {
      const response =
        await transactionService.getUsers();

      return response;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message,
      );
    }
  },
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,

  reducers: {
    addTransaction: (
      state,
      action: PayloadAction<Transaction>,
    ) => {
      state.transactions.unshift(action.payload);
    },

    deleteTransaction: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.transactions =
        state.transactions.filter(
          item => item.id !== action.payload,
        );
    },
  },

  extraReducers: builder => {
    builder

      .addCase(
        fetchTransactions.pending,
        state => {
          state.loading = true;
          state.error = null;
        },
      )

      .addCase(
        fetchTransactions.fulfilled,
        (state, action) => {
          state.loading = false;
          // Update based on actual API response structure
          state.transactions =
            action.payload || [];
        },
      )

      .addCase(
        fetchTransactions.rejected,
        (state, action) => {
          state.loading = false;

          state.error =
            action.payload as string;
        },
      )


      .addCase(
        fetchUsers.fulfilled,
        (state, action) => {
          state.loading = false;
          // Update based on actual API response structure
          state.users =
            action.payload || [];
        },
      )
  },
});

export const {
  addTransaction,
  deleteTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;