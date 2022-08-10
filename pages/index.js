/**
 * @file index.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Image from "next/image";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Subheadline from "../components/subheadline";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { midwayImage } from "../styles/Home.module.scss";
import { homeBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchPage } from "../utils/contentfulData";
import Script from "next/script";

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const environment = process.env.CONTENTFUL_ENVIRONMENT;

export default function Home(props) {
  return (
    <ThemeProvider theme={epiTheme}>
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          _html: `
            <!-- Google Tag Manager (noscript) -->
            <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P835S26"
            height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
            <!-- End Google Tag Manager (noscript) -->
          `,
        }}
      />
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
      <Navigation />
      <Hero heroText={props.hero} heroImage={homeBackground} />
      <Image
        src={`/images/stacked-waves-haikei.png`}
        layout={`responsive`}
        width={`100%`}
        height={`3vh`}
        className={midwayImage}
        alt={`Stacked waves`}
      />
      <Subheadline
        headingText={documentToReactComponents(props.subheadlineHeader)}
        paragraphText={documentToReactComponents(props.subheadlineParagraph)}
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
  const homeResponse = await fetchPage("4U1GSbufjN9wm74xKKVGN0");

  const imageId = homeResponse.fields.image.sys.id;

  const response = await fetch(
    `https://cdn.contentful.com/spaces/${space}/environments/${environment}/assets/${imageId}?access_token=${accessToken}`
  );
  const imageResponse = await response.json();
  JSON.parse(JSON.stringify(imageResponse));

  if (homeResponse.fields) {
    return {
      props: {
        hero: homeResponse.fields.hero,
        subheadlineHeader: homeResponse.fields.subheadlineHeader,
        subheadlineParagraph: homeResponse.fields.subheadlineResponse,
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
