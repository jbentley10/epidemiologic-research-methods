/**
 * @file about.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

// Import styles
import { epiTheme } from "../styles/epiTheme";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import CenteredTextBlock from "../components/centered-text-block";
import SubheadlineSwitch from "../components/subheadline-switch";
import Footer from "../components/footer";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";

export default function About() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>About | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Learn about Epidemiologic Research & Methods.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"About"}
        heroImage={expertsBackground}
        button={false}
      />
      <CenteredTextBlock
        headingCopy={`We are a full-service provider for all phases of epidemiologic study
        design.`}
        paragraphCopy={`With 15 team members including three Senior Epidemilogists, we
        provide expertise in substantive areas.`}
      />
      <SubheadlineSwitch />
      <Footer />
    </ThemeProvider>
  );
}
