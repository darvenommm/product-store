import { RootState } from '@/providers';
import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isAuthentication: boolean;
}

const initialState: IInitialState = {
  isAuthentication: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectIsAuthentication = (state: RootState): boolean => {
  return state.user.isAuthentication;
};
