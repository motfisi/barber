import Head from 'next/head';
import { FC, PropsWithChildren } from 'react';

const Page: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <Head>
        <title>barber</title>
        <meta name="description" content="barber website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
};

export default Page;
