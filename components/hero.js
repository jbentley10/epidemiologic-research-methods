/**
 * @file hero.js
 */
// Import dependencies
import { Typography } from "@mui/material";

const Hero = () => {
  return (
    <div id="main">
        <Typography 
            variant={`h1`}
        >
            Epidemiologic Research & Methods, LLC
        </Typography>
        <Typography 
            variant={`h2`}
        >
            Expidemiology expert consulting
        </Typography>
    </div>
  );
};

export default Hero;
