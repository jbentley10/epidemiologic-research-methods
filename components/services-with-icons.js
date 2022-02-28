/**
 * @file services-with-icons.js
 */
// Import dependencies
import { Grid, Typography } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import styles
import {
  bannerContainer,
  heading,
  circleIcon,
  icon,
  circleContent,
  circleText,
} from "../styles/ServicesWithIcons.module.scss";

// Import icons
import MedicationIcon from "@mui/icons-material/Medication";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import BugReportIcon from "@mui/icons-material/BugReport";

const CircleElement = (props) => {
  // Special hooks for animating when elements are in view
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const iconVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={controls}
        variants={iconVariants}
        transition={{ duration: props.transitionDuration }}
      >
        <div className={circleIcon}>
          <div className={circleContent}>{props.icon}</div>
        </div>
        <div className={circleText}>
          <Typography variant={`h4`}>{props.heading}</Typography>
          <Typography variant={`paragraph`}>{props.subtext}</Typography>
        </div>
      </motion.div>
    </div>
  );
};

const ServicesWithIcons = () => {
  const [ref, inView] = useInView();
  const controls = useAnimation();

  const headingVariants = {
    hidden: { translateY: -10, opacity: 0 },
    visible: { translateY: 1, opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className={bannerContainer}>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={controls}
        variants={headingVariants}
        transition={{ duration: 1 }}
      >
        <Typography className={heading} variant={`h2`}>
          Our Expertise
        </Typography>
      </motion.div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<MedicationIcon className={icon} />}
            heading={"Drug safety"}
            transitionDuration={1}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<PsychologyIcon className={icon} />}
            heading={"Mental Health and Substance Abuse"}
            transitionDuration={1.5}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<WbSunnyIcon className={icon} />}
            heading={"Environmental Health"}
            transitionDuration={2}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<CoronavirusIcon className={icon} />}
            heading={"Infectious Disease"}
            transitionDuration={2.5}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<BugReportIcon className={icon} />}
            heading={"Neurologic Disease"}
            transitionDuration={3}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesWithIcons;
