/**
 * @file contact-us.js
 */

// Import dependencies
import { ThemeProvider, Typography } from "@mui/material";
import Navigation from "../components/navigation";

// Import styles
import { epiTheme } from "../styles/epiTheme";

// Import components
import Hero from "../components/hero";

// Import assets
import { expertsBackground } from "../styles/Hero.module.scss";
import Footer from "../components/footer";

export default function ContactUs() {
  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero heroText={"Contact Us"} heroImage={expertsBackground} button={false} />
      <Footer />
    </ThemeProvider>
  );
}
