/**
 * @file services.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Import styles
import { epiTheme } from "../styles/epiTheme";

// Import components
import Navigation from "../components/navigation";

// Import assets
import Footer from "../components/footer";

// Import functions
import ShinyAppEmbed from "../components/shiny-app-embed";

export default function Shiny(props) {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Shiny | Epidemiologic Research & Methods LLC</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <html lang={`en`} />
        <meta
          name='description'
          content={`Learn more about Epidemiology Research & Methods (ERM).`}
        />
        <meta name='theme-color' content='#f9C586' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navigation />
      <ShinyAppEmbed />
      <Footer />
    </ThemeProvider>
  );
}
