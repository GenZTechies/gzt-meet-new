import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SplashScreen } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SplashScreen />
      <Component {...pageProps} />
    </>
  );
}
