import { Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { FC } from 'react';

import LiquidChrome from '@/components/LiquidChrome';
import { ROUTES } from '@/const/routes';

const NotFound: FC = () => {
  const router = useRouter();

  const onClick = () => {
    router.push(ROUTES.HOMEPAGE);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100vh"
      position="relative"
      gap={2}
    >
      <LiquidChrome baseColor={[0.07, 0, 0]} amplitude={0.3} />
      <Typography variant="h1" zIndex={1} color="secondary">
        404
      </Typography>
      <Button
        size="large"
        variant="outlined"
        color="secondary"
        onClick={onClick}
      >
        На главную
      </Button>
    </Box>
  );
};

export default NotFound;
