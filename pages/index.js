/**
 * @file index.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Image from "next/image";
import Head from "next/head";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Subheadline from "../components/subheadline";
import ThreeCardBlock from '../components/three-card-block';
import GooBlob from "../components/goo-blob";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { midwayImage } from "../styles/Home.module.scss";
import { homeBackground } from "../styles/Hero.module.scss";

export default function Home() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Home | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`The home page of Epidemiologic Research & Methods.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GooBlob />
      <Navigation />
      <Hero
        heroText={`Epidemiologic Research & Methods, LLC`}
        heroImage={homeBackground}
      />
      <Image
        src={`/images/stacked-waves-haikei.png`}
        layout={`responsive`}
        width={`100%`}
        height={`10vh`}
        className={midwayImage}
        alt={`Stacked waves`}
      />
      <Subheadline />
      <ThreeCardBlock />
      {/* <ServicesWithIcons /> */}
      <Footer />
    </ThemeProvider>
  );
}
