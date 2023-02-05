import "../styles/globals.css";

import Head from "next/head";

import { DefaultLayout } from "../layouts";
import { trpc } from "../utils/trpc";

import type { AppType } from "next/app";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <DefaultLayout>
      <Head>
        <title>Wählen Sie Ihre Schwierigkeit</title>
        <meta name="description" content="deutsch niveau auswahl" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
      <ReactQueryDevtools position={"bottom-right"} />
    </DefaultLayout>
  );
};

export default trpc.withTRPC(MyApp);
