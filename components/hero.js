/**
 * @file hero.js
 */
// Import dependencies
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Import styles
import {
  heroContainer,
  textContainer,
  button,
  heading1,
  heading2,
} from "../styles/Hero.module.scss";
import { epiTheme } from "../styles/epiTheme";

const Hero = () => {
  return (
    <div id="main" className={heroContainer}>
      <div className={textContainer}>
        <motion.div
          initial={{ translateY: -10, opacity: 0 }}
          animate={{ translateY: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Typography className={heading1} variant={`h1`}>
            Epidemiologic Research & Methods, LLC
          </Typography>
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 1, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Typography className={heading2} variant={`h2`}>
            Expidemiology expert consulting
          </Typography>
        </motion.div>
        <motion.div
          initial={{ translateX: -5, opacity: 0 }}
          animate={{ translateX: 1, opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Button
            className={button}
            variant={"contained"}
            size={`large`}
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
