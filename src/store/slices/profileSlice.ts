import {createSlice} from '@reduxjs/toolkit';

interface ProfileState {
  name: string;
  email: string;
}

const initialState: ProfileState = {
  name: 'Yash Patel',
  email: 'yash@gmail.com',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
});

export default profileSlice.reducer;