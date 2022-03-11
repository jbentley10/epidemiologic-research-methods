/**
 * @file services.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Head from 'next/head';

// Import styles
import { epiTheme } from "../styles/epiTheme";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";
import Footer from "../components/footer";

export default function Services() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Services | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Learn more about the services that ERM provides.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero heroText={"Services"} heroImage={expertsBackground} button={false} />
      <Footer />
    </ThemeProvider>
  );
}
