import { useRouter } from 'next/router';
import { FC, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

import { ROUTES } from '@/const';
import { selectTelegramUser } from '@/store/slices/telegramUserSlice';

export const withAuth = <P extends object>(WrappedComponent: FC<P>) => {
  const WithAuth: FC<P> = (props) => {
    const router = useRouter();
    const user = useSelector(selectTelegramUser);

    useLayoutEffect(() => {
      if (!user) {
        router.push(ROUTES.HOMEPAGE);
      }
    }, [user]);

    if (user) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return WithAuth;
};
