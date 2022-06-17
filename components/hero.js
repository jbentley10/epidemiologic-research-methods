/**
 * @file hero.js
 */
// Import dependencies
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Import styles
import {
  heroContainer,
  subheroContainer,
  textContainer,
  button,
  heading1,
  heading2,
} from "../styles/Hero.module.scss";

const Hero = (props) => {
  return (
    <div id="main" className={`${heroContainer} ${props.heroImage} ${props.isSubhero && subheroContainer}`}>
      <div className={textContainer}>
        <motion.div
          initial={{ translateY: -10, opacity: 0 }}
          animate={{ translateY: 1, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Typography className={heading1} variant={`h1`}>
            {props.heroText}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ translateY: 10, opacity: 0 }}
          animate={{ translateY: 1, opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Typography className={heading2} variant={`h2`}>
            {props.heroSubtext && props.heroSubtext}
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          {props.button && (
            <Button className={button} variant={"contained"} size={`large`}>
              Learn More
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
