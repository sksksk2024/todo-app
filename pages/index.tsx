'use client';

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Todo App</title>
        <meta name="description" content="Home Page of the Todo App" />
        <meta property="og:title" content="Home Page - Todo App" />
        <meta
          property="og:description"
          content="Welcome to the homepage of the Todo App"
        />
      </Head>
    </>
  );
}
