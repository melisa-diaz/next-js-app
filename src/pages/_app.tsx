import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppRoot } from "@tkww/orion-web-app-kernel";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppRoot>
      <Component {...pageProps} />
    </AppRoot>
  );
}
