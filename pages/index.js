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
import GooBlob from "../components/goo-blob";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { midwayImage } from "../styles/Home.module.scss";
import { homeBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchHome } from "../utils/contentfulData";

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN

export default function Home(props) {
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
        heroText={props.hero}
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
        headingText={props.subheadlineHeader}
        paragraphText={props.subheadlineParagraph}
        buttonText={props.subheadlineLinkText}
        buttonLink={props.subheadlineLink}
        imageLink={props.imageLink}
        imageWidth={props.imageWidth}
        imageHeight={props.imageHeight}
        imageDescription={props.imageDescription}
      />
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const homeResponse = await fetchHome();

  const imageId = homeResponse.fields.image.sys.id;

  const response = await fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/assets/${imageId}?access_token=${accessToken}`);
  const imageResponse = await response.json();
  JSON.parse(JSON.stringify(imageResponse));

  if (homeResponse.fields) {
    return {
      props: {
        hero: homeResponse.fields.hero,
        subheadlineHeader: homeResponse.fields.subheadlineHeader,
        subheadlineParagraph: homeResponse.fields.subheadlineParagraph,
        subheadlineLinkText: homeResponse.fields.subheadlineLinkText,
        subheadlineLink: homeResponse.fields.subheadlineLink,
        imageLink: imageResponse.fields.file.url,
        imageWidth: imageResponse.fields.file.details.image.width,
        imageHeight: imageResponse.fields.file.details.image.height,
        imageDescription: imageResponse.fields.description,
      },
    };
  }
}