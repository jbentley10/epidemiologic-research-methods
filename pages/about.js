/**
 * @file about.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Navigation from "../components/navigation";

// Import styles
import { epiTheme } from "../styles/epiTheme";

// Import components
import Hero from "../components/hero";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";
import Footer from "../components/footer";

export default function About() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero heroText={"About"} heroImage={expertsBackground} button={false} />
      <Footer />
    </ThemeProvider>
  );
}
