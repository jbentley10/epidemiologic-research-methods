/**
 * @file experts.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";

// Import styles
import { epiTheme } from "../styles/epiTheme";

export default function Experts() {

  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero />
    </ThemeProvider>
  );
}
