/**
 * @file experts.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import ExpertListing from "../components/expert-listing";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { expertsBackground } from "../styles/Hero.module.scss";

export default function Experts() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Experts | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Meet the experts over at Epidemiologic Research & Methods LLC.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero heroText={"Meet the Experts"} heroImage={expertsBackground} button={false} />
      <ExpertListing />
      <Footer />
    </ThemeProvider>
  );
}
