'use client';

import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TELEGRAM_BOT_NAME } from '@/const';
import { setTelegramUser } from '@/store/slices/telegramUserSlice';

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

declare global {
  interface Window {
    onTelegramAuth: (user: TelegramUser) => void;
  }
}

const TelegramButton = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', TELEGRAM_BOT_NAME);
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');
    document.getElementById('telegram-login-container')?.appendChild(script);

    window.onTelegramAuth = (user: TelegramUser) => {
      dispatch(setTelegramUser(user));
    };
  }, [dispatch]);

  return <Box id="telegram-login-container" />;
};

export default TelegramButton;
