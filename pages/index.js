/**
 * @file index.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import Image from "next/image";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Subheadline from "../components/subheadline";
import ServicesWithIcons from "../components/services-with-icons";
import GooBlob from "../components/goo-blob";
import Footer from "../components/footer";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { midwayImage } from "../styles/Home.module.scss";

export default function Home() {
  return (
    <ThemeProvider theme={epiTheme}>
      <GooBlob />
      <Navigation />
      <Hero
        heroText={`Epidemiologic Research & Methods, LLC`}
        heroSubtext={`Expidemiology expert consulting`}
        button={true}
      />
      <Image
        src={`/images/stacked-waves-haikei.png`}
        layout={`responsive`}
        width={`100%`}
        height={`30vh`}
        className={midwayImage}
        alt={`Stacked waves`}
      />
      <Subheadline />
      <ServicesWithIcons />
      <Footer />
    </ThemeProvider>
  );
}
