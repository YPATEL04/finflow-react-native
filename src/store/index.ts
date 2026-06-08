import {configureStore} from '@reduxjs/toolkit';

import accountReducer from './slices/accountSlice';
import transactionReducer from './slices/transactionSlice';
import cardReducer from './slices/cardSlice';
import profileReducer from './slices/profileSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    transactions: transactionReducer,
    cards: cardReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch =
  typeof store.dispatch;