import { RootState } from '@/providers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IInitialState {
  isAuthentication: boolean;
}

const initialState: IInitialState = {
  isAuthentication: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateIsAuthentication: (state, payload: PayloadAction<boolean>) => {
      state.isAuthentication = payload.payload;
    },
  },
});

export const { updateIsAuthentication } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const selectIsAuthentication = (state: RootState): boolean => {
  return state.user.isAuthentication;
};
