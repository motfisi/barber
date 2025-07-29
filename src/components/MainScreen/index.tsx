import { Button } from '@mui/material';
import { FC } from 'react';

import LiquidChrome from '@/components/LiquidChrome';

import { Container, ImgContainer, Image } from './styles';

const MainScreen: FC = () => {
  return (
    <Container>
      <LiquidChrome baseColor={[0.07, 0, 0]} amplitude={0.3} />
      <ImgContainer>
        <Image src="/img/hoxme.svg" fill alt="HOXME" />
      </ImgContainer>
      <Button size="large" variant="outlined" color="secondary">
        Записаться
      </Button>
    </Container>
  );
};

export default MainScreen;
