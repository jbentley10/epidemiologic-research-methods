/**
 * @file index.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Subheadline from "../components/subheadline";
import ServicesWithIcons from '../components/services-with-icons';

// Import styles
import { epiTheme } from "../styles/epiTheme";

export default function Home() {

  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero />
      <Subheadline />
      <ServicesWithIcons />
    </ThemeProvider>
  );
}
