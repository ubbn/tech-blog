import "../styles/globals.css";
import type { AppProps } from "next/app";

// Here to apply custom global styles
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
