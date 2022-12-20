import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SplashScreen } from "../components";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <SplashScreen />
      <Component {...pageProps} />
      <Script strategy="lazyOnload" src="https://meet.jit.si/external_api.js" />
    </>
  );
}
