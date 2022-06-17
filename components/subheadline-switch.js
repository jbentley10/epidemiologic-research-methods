/**
 * @file subheadline-switch.js
 */
// Import dependencies
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from 'next/image';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import styles
import {
  subheadlineContainer,
  textContainer,
  headingText,
  subheadingText,
} from "../styles/SubheadlineSwitch.module.scss";

const SubheadlineSwitch = () => {
  // Special hooks for animating when elements are in view
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // All of the variants used to animate the elements of the component
  const headingVariants = {
    hidden: { translateY: -10, opacity: 0 },
    visible: { translateY: 1, opacity: 1 }
  };

  const subheadingVariants = {
    hidden: { translateY: -5, opacity: 0 },
    visible: { translateY: 1, opacity: 1 }
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Box className={subheadlineContainer}>
      <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
          <div className={textContainer}>
            <motion.div
              ref={ref}
              initial={"hidden"}
              animate={controls}
              variants={headingVariants}
              transition={{ duration: 2 }}
            >
              <Typography className={headingText} variant={`h3`}>
                We are a full-service provider for all phases of epidemiologic
                study design.
              </Typography>
            </motion.div>
            <motion.div
              ref={ref}
              initial={"hidden"}
              animate={controls}
              variants={subheadingVariants}
              transition={{ duration: 3 }}
            >
            <Typography className={subheadingText} variant={`body1`}>
              With 15 team members including three Senior Epidemilogists, we
              provide expertise in substantive areas.
            </Typography>
            </motion.div>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Image
            src={`/images/people-pie.jpg`}
            fill={`responsive`}
            width={`800`}
            height={`600`}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SubheadlineSwitch;
