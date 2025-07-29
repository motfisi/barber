import { Box, styled } from '@mui/material';
import ImageBase from 'next/image';

export const Container = styled(Box)({
  position: 'relative',
  width: '100%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 16,
});

export const ImgContainer = styled(Box)({
  position: 'relative',
  width: '95%',
  maxWidth: 500,
  aspectRatio: '2/1',
});

export const Image = styled(ImageBase)({
  objectFit: 'contain',
});
