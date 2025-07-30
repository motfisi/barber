import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useSelector } from 'react-redux';

import LiquidChrome from '@/components/LiquidChrome';
import TelegramButton from '@/components/TelegramButton';
import { ROUTES } from '@/const/routes';
import { selectTelegramUser } from '@/store/slices/telegramUserSlice';

import { Container, ImgContainer, Image } from './styles';

const MainScreen: FC = () => {
  const router = useRouter();
  const user = useSelector(selectTelegramUser);

  const onClick = () => {
    router.push(ROUTES.APPOITMENT);
  };

  return (
    <Container>
      <LiquidChrome baseColor={[0.07, 0, 0]} amplitude={0.3} />
      <ImgContainer>
        <Image src="/img/hoxme.svg" fill alt="HOXME" />
      </ImgContainer>
      {user ? (
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          onClick={onClick}
        >
          Записаться
        </Button>
      ) : (
        <Box zIndex={1}>
          <TelegramButton />
        </Box>
      )}
    </Container>
  );
};

export default MainScreen;
