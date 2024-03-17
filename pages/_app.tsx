import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
      <Analytics></Analytics>
    </>
  );
}
