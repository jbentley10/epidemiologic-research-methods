/**
 * @file experts.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import ExpertListing from "../components/expert-listing";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { expertsBackground } from "../styles/Hero.module.scss";

export default function Experts() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero heroText={"Meet the Experts"} heroImage={expertsBackground} button={false} />
      <ExpertListing />
      <Footer />
    </ThemeProvider>
  );
}
