/**
 * @file _app.js
 */
// Import dependencies
import TagManager from "react-gtm-module";
import { useEffect } from 'react';

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

function MyApp({ Component, pageProps }) {
  const tagManagerArgs = {
    id: "GTM-P835S26",
  }

  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  })

  return <Component {...pageProps} />;
}

export default MyApp;
