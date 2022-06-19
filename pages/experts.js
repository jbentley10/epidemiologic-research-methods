/**
 * @file experts.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Head from "next/head";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import ExpertListing from "../components/expert-listing";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { expertsBackground } from "../styles/Hero.module.scss";

// Import functions
import { fetchExperts } from "../utils/contentfulData";

// Declare data-retrieval vars
const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

export default function Experts(props) {
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
      <Hero
        isSubhero={true}
        heroText={"Meet the Experts"}
        heroImage={expertsBackground}
        button={false}
      />
      <ExpertListing 
        expertsText={props.expertsResponse}
        expertsPhotos={props.expertsPhotos}
        expertsCVs={props.expertsCVs}
      />
      <Footer />
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const expertsResponse = await fetchExperts();

  let expertsImageIds = [];
  let expertsCVIds = [];

  expertsResponse.forEach(expert => {
    expertsImageIds.push(expert.fields.image.sys.id);
    expertsCVIds.push(expert.fields.cv.sys.id);
  });

  if (expertsResponse[0].fields) {
    let expertsPhotos = [];

    for (var i = 0; i < expertsImageIds.length; i++) {
      const response = await fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/assets/${expertsImageIds[i]}?access_token=${accessToken}`);
      const data = await response.json();
      expertsPhotos.push(data);
    }

    let expertsCVs = [];
    
    for (var i = 0; i < expertsCVIds.length; i++) {
      const response = await fetch(`https://cdn.contentful.com/spaces/${space}/environments/master/assets/${expertsCVIds[i]}?access_token=${accessToken}`);
      const data = await response.json();
      expertsCVs.push(data);
    }

    JSON.parse(JSON.stringify(expertsPhotos));
    JSON.parse(JSON.stringify(expertsCVs));

    if (expertsPhotos[0]) {
      return {
        props: {
          expertsResponse,
          expertsPhotos,
          expertsCVs
        },
      };
    }
  }
}