import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '@/store';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

interface TelegramUserState {
  user: TelegramUser | null;
}

const initialState: TelegramUserState = {
  user: null,
};

const telegramUserSlice = createSlice({
  name: 'telegramUser',
  initialState,
  reducers: {
    setTelegramUser(state, action: PayloadAction<TelegramUser>) {
      state.user = action.payload;
    },
    clearTelegramUser(state) {
      state.user = null;
    },
  },
});

export const { setTelegramUser, clearTelegramUser } = telegramUserSlice.actions;
export const selectTelegramUser = (state: RootState) => state.telegramUser.user;

export default telegramUserSlice.reducer;
