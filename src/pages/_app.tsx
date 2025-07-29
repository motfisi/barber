import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { FC } from 'react';

import theme from '@/lib/MaterialUI';
import { createEmotionCache } from '@/lib/MaterialUI/createEmotionCache';

import type { AppProps as AppPropsBase } from 'next/app';
import '../App.scss';

const clientSideEmotionCache = createEmotionCache();

interface AppProps extends AppPropsBase {
  emotionCache?: EmotionCache;
}

const App: FC<AppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
