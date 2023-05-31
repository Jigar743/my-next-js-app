import React from "react";
import Head from "next/head";

function HomePage() {
  return (
    <>
      <Head>
        <title>My Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
    </>
  );
}

export default HomePage;

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: false,
      destination: "/signup",
    },
  };
}
