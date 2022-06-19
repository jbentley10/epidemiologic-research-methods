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
        {props.publications.map((publication) => {
          return (
            <Accordion>
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
                  href={`https:${publication.fields.file.url}`}
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
  const publicationsResponse = await fetchPublications();
  const publicationsPageResponse = await fetchPublicationsPage();

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
