import {createSlice} from '@reduxjs/toolkit';

interface Card {
  id: string;
  cardName: string;
  cardNumber: string;
  balance: number;
}

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [
    {
      id: '1',
      cardName: 'FinFlow Black',
      cardNumber: '4582',
      balance: 42850,
    },
    {
      id: '2',
      cardName: 'FinFlow Virtual',
      cardNumber: '8721',
      balance: 8450,
    },
  ],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export default cardSlice.reducer;