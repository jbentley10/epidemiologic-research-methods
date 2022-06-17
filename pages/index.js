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
import ThreeCardBlock from "../components/three-card-block";
import GooBlob from "../components/goo-blob";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { midwayImage } from "../styles/Home.module.scss";
import { homeBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchHome } from "../utils/contentfulData";

export default function Home({ homeResponse }) {
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
        heroText={homeResponse.hero}
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
      <Subheadline 
        headingText={homeResponse.subheadlineHeader}
        paragraphText={homeResponse.subheadlineBody}
        buttonText={homeResponse.buttonText}
        buttonLink={homeResponse.buttonLink}
      />
      <ThreeCardBlock 
        service1Header={homeResponse.service1Header}
        service1Body={homeResponse.service1Body}
        service2Header={homeResponse.service2Header}
        service2Body={homeResponse.service2Body}
        service3Header={homeResponse.service3Header}
        service3Body={homeResponse.service3Body}
      />
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const homeResponse = await fetchHome();

  if (homeResponse.fields) {
    return {
      props: {
        homeResponse,
      },
    };
  }
}