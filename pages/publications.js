/**
 * @file publications.js
 */

// Import dependencies
import * as React from "react";
import Head from "next/head";
import { Button, ThemeProvider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { expertsBackground } from "../styles/Hero.module.scss";
import {
  accordionContainer,
  headingContainer,
} from "../styles/Publications.module.scss";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";

// Import assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  fetchPublications,
  fetchPublicationsPage,
  fetchPublicationAsset
} from "../utils/contentfulData";

export default function Publications(props) {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Publications | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta name="description" content={`Read our publications.`} />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        isSubhero={true}
        heroText={"Publications"}
        heroImage={expertsBackground}
        button={false}
      />
      <div className={accordionContainer}>
        <div className={headingContainer}>
          <Typography variant={`h2`}>{props.heading}</Typography>
          <Typography variant={`body1`}>{props.description}</Typography>
        </div>
        {props.publications.map((publication, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{publication.fields.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{publication.fields.description}</Typography>
                <a
                  href={publication.fields.pdf ? `https:${publication.fields.file.url}` : publication.fields.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant={"contained"}>Read the publication</Button>
                </a>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </ThemeProvider>
  );
}

export async function getStaticProps() {
  const publicationsArray = await fetchPublications();
  const publicationsPageResponse = await fetchPublicationsPage();

  const publicationsResponse = publicationsArray.slice();

  let publicationPDFID = '';

  // Look at the publications response
  // Iterate through each of the elements
  for (var i = 0; i < publicationsResponse.length; i++) {
    // If one of the elements has a PDF
    if (publicationsResponse[i].fields.pdf) {
      // Store the ID
      publicationPDFID = publicationsResponse[i].fields.pdf.sys.id;
      
      const publicationAsset = fetchPublicationAsset(publicationPDFID);
      console.log(publicationAsset.fields);
      
      publicationsResponse[i].fields.pdf.url = publicationAsset.fields.file.url;
    }
  }

  if (publicationsPageResponse.fields && publicationsResponse[0].fields) {
    return {
      props: {
        heading: publicationsPageResponse.fields.heading,
        description: publicationsPageResponse.fields.description,
        publications: publicationsResponse,
      },
    };
  }
}
