/**
 * @file publications.js
 */

// Import dependencies
import * as React from "react";
import Head from 'next/head';
import { Button, ThemeProvider } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { expertsBackground } from "../styles/Hero.module.scss";
import { accordionContainer, headingContainer } from "../styles/Publications.module.scss";

// Import components
import Hero from "../components/hero";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

// Import assets
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Publications() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Head>
        <title>Publications | Epidemiologic Research & Methods LLC</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <html lang={`en`} />
        <meta
          name="description"
          content={`Read our publications.`}
        />
        <meta name="theme-color" content="#f9C586" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <Hero
        heroText={"Publications"}
        heroImage={expertsBackground}
        button={false}
      />
      <div className={accordionContainer}>
        <div className={headingContainer}>
          <Typography variant={`h2`}>Read our publications</Typography>
          <Typography variant={`body1`}>Lorem ipsum solor dut amet. Codipsicing elit.</Typography>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>
              Systematic review of the literature on triclosan and health
              outcomes in humans Critical Reviews in Toxicology 2018 48(1):1-51
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Authors: Goodman M, Naiman D, LaKind J.</Typography>
            <a
              href="https://epidemiologymethods.com/wp-content/uploads/2019/07/Goodman-2017-Systematic-review-of-the-literature-on-triclosan-and-health-outcomes-in-humans.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant={"contained"}>Read the publication</Button>
            </a>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Indirect estimation of the prevalence of spinal muscular atrophy
              Type I, II, and III in the United States. Orphanet journal of rare
              diseases, 2017;12(1):175.
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Authors: Goodman M, Naiman D, LaKind J.</Typography>
            <a
              href="https://epidemiologymethods.com/wp-content/uploads/2019/07/Lally-2017-Indirect-estimation-of-the-prevalence-of-SMA-types-I-II-III-in-the-United-States.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant={"contained"}>Read the publication</Button>
            </a>
          </AccordionDetails>
        </Accordion>
      </div>
      <Footer />
    </ThemeProvider>
  );
}
