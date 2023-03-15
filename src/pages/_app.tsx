import "../styles/globals.css";

import { DefaultLayout } from "@layouts";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { trpc } from "@utils/trpc";
import Head from "next/head";

import type { AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Wählen Sie Ihre Schwierigkeit</title>
        <meta name="description" content="deutsch niveau auswahl" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" as="video" href="/jake.webm" />
        <link rel="preload" as="video" href="/happy.webm" />
        <link rel="preload" as="video" href="/spin.webm" />
        <link rel="preload" as="video" href="/excited-happy.webm" />
        <link rel="preload" as="video" href="/anya.webm" />
        <link rel="preload" href="/ding.mp3" as="audio" />
        <link rel="preload" href="/quack.mp3" as="audio" />
        <link rel="preload" href="/cheering.mp3" as="audio" />
      </Head>
      <Component {...pageProps} />
      {process.env.NODE_ENV !== "production" && (
        <ReactQueryDevtools position={"bottom-right"} />
      )}
    </DefaultLayout>
  );
};

export default trpc.withTRPC(MyApp);
