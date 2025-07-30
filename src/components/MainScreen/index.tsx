import { Button } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';

import LiquidChrome from '@/components/LiquidChrome';
import { ROUTES } from '@/const/routes';

import { Container, ImgContainer, Image } from './styles';

const MainScreen: FC = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(ROUTES.APPOITMENT);
  };

  return (
    <Container>
      <LiquidChrome baseColor={[0.07, 0, 0]} amplitude={0.3} />
      <ImgContainer>
        <Image src="/img/hoxme.svg" fill alt="HOXME" />
      </ImgContainer>
      <Button
        size="large"
        variant="outlined"
        color="secondary"
        onClick={onClick}
      >
        Записаться
      </Button>
    </Container>
  );
};

export default MainScreen;
