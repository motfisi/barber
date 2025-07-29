import { FC } from 'react';

import type { AppProps } from 'next/app';

const App: FC<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default App;
