import React from "react";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

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
