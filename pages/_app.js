// Import styles
import "../styles/globals.css";

// Import fonts
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/unna/400.css";
import "@fontsource/unna/700.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtm.js?id=GTM-P835S26`} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
