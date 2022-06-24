/**
 * @file services.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Head from "next/head";

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
import { fetchServices } from "../utils/contentfulData";

export default function Services(props) {
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
      <Hero
        isSubhero={true}
        heroText={"Services"}
        heroImage={expertsBackground}
        button={false}
      />
      <ThreeColumnLists
        column1Heading={props.service1Heading}
        column1Body={props.service1Body}
        column2Heading={props.service2Heading}
        column2Body={props.service2Body}
        column3Heading={props.service3Heading}
        column3Body={props.service3Body}
      />
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const servicesResponse = await fetchServices();

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
