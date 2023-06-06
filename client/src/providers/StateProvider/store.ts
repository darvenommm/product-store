import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user/userSlice';
import { themeReducer } from '@/entities/theme/themeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
