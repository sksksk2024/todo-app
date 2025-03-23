import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="A cool todo app for all your needs" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
