import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { Theme } from './types';
import { RootState } from '@/providers/StateProvider';

type ThemeType = Theme | null;

const ThemeSlice = createSlice({
  name: 'theme',
  initialState: null as ThemeType,
  reducers: {
    setTheme: (_, payload: PayloadAction<Theme>) => {
      return payload.payload;
    },
  },
});

export const themeReducer = ThemeSlice.reducer;

export const { setTheme } = ThemeSlice.actions;

export const selectTheme = (state: RootState): ThemeType => state.theme;
