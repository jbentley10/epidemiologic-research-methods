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
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import ThreeColumnLists from "../components/three-column-lists";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";
import Footer from "../components/footer";

// Import functions
import { fetchAboutUs } from "../utils/contentfulData";

export default function AboutUs(props) {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>About Us | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Learn more about Epidemiology Research & Methods (ERM).`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"About Us"}
        heroImage={expertsBackground}
        button={false}
      />
      <ThreeColumnLists
        column1Heading={props.service1Heading}
        column1Body={documentToReactComponents(props.service1Body)}
        column2Heading={props.service2Heading}
        column2Body={documentToReactComponents(props.service2Body)}
        column3Heading={props.service3Heading}
        column3Body={documentToReactComponents(props.service3Body)}
      />
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetchAboutUs();

  if (servicesResponse.fields) {
    return {
      props: {
        service1Heading: servicesResponse.fields.service1Heading,
        service1Body: servicesResponse.fields.service1Body,
        service2Heading: servicesResponse.fields.service2Heading,
        service2Body: servicesResponse.fields.service2Body,
        service3Heading: servicesResponse.fields.service3Heading,
        service3Body: servicesResponse.fields.service3Body,
      },
    };
  }
}
