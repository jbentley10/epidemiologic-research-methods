/**
 * @file about.js
 */

// Import dependencies
import { ThemeProvider, Typography } from "@mui/material";
import Navigation from "../components/navigation";

// Import styles
import { epiTheme } from "../styles/epiTheme";

export default function About() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Typography variant={`h3`}>Banner goes here</Typography>
      <Typography variant={`p`}>
        We are a full-service provider for all phases of epidemiologic study
        design, conduct, analysis, interpretation and manuscript preparation.
      </Typography>
    </ThemeProvider>
  );
}
