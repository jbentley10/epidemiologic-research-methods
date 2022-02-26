/**
 * @file index.js
 */

// Import dependencies
import { ThemeProvider } from "@mui/material";
import { useEffect, useRef, useState } from "react";

// Import components
import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Subheadline from "../components/subheadline";

// Import styles
import { epiTheme } from "../styles/epiTheme";
import { mainContainer, imageContainer } from "../styles/Home.module.css";

export default function Home() {
  // For the moving image effect
  // Images asset
  const fruitImages = {
    1: "https://drive.google.com/uc?id=1vtaubItASKilyvb5sgQO7D7gjAQ7xo0i",
    2: "https://drive.google.com/uc?id=1FJNbSIMKRPBnGPienoYK1Qf8wIwQSdpR",
    3: "https://drive.google.com/uc?id=1TODQyZgnCjDX2Slr0ll8g-ymIV8Yizkh",
    4: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    5: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    6: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    7: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    8: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    9: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    10: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    11: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    12: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    13: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    14: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    15: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    16: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    17: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    18: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    19: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
    20: "https://drive.google.com/uc?id=1D7PBddCxxb6aRk43maJ_BXgQD-PRS6R7",
  };
  // Global variable to control the scrolling behavior
  const step = 30; // For each 30px, change an image
  const imageElement = useRef(null);

  const trackScrollPosition = () => {    
    const y = window.pageYOffset;

    const label = Math.min(Math.floor(y / 30) + 1, 20);
    const imageToUse = fruitImages[label];

    console.log("position: " + y);

    // Change the background image
    imageElement.current.style.setProperty('background-image', `url('${imageToUse}')`);
  }
  
  useEffect(() => {
    window.addEventListener('scroll', trackScrollPosition);

    return () => {
      window.removeEventListener("scroll", trackScrollPosition);
    };
  })

  return (
    <ThemeProvider theme={epiTheme}>
      <Navigation />
      <Hero />
      <Subheadline />
      {/* <div className={mainContainer}>
        <div ref={imageElement} className={imageContainer}></div>
      </div> */}
    </ThemeProvider>
  );
}
