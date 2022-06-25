/**
 * @file subheadline.js
 */
// Import dependencies
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import styles
import {
  mainGrid,
  textContainer,
  subheadlineButton,
} from "../styles/Subheadline.module.scss";

const Subheadline = (props) => {
  // Special hooks for animating when elements are in view
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // All of the variants used to animate the elements of the component
  const headingVariants = {
    hidden: { translateY: -10, opacity: 0 },
    visible: { translateY: 1, opacity: 1 },
  };

  const subheadingVariants = {
    hidden: { translateY: -5, opacity: 0 },
    visible: { translateY: 1, opacity: 1 },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Box>
      <Grid container className={mainGrid}>
        <Grid item xs={0} md={2} />
        <Grid item xs={12} md={3}>
          <Image
            layout={`responsive`}
            width={props.imageWidth}
            height={props.imageHeight}
            src={`https:${props.imageLink}`}
            alt={props.imageDescription}
          />
        </Grid>
        <Grid item xs={0} md={1} />
        <Grid item xs={10} md={5}>
          <div className={textContainer}>
            <motion.div
              ref={ref}
              initial={"hidden"}
              animate={controls}
              variants={headingVariants}
              transition={{ duration: 2 }}
            >
              <div>{props.headingText}</div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={"hidden"}
              animate={controls}
              variants={subheadingVariants}
              transition={{ duration: 3 }}
            >
              <div>{props.paragraphText}</div>
            </motion.div>
            <motion.div
              ref={ref}
              initial={"hidden"}
              animate={controls}
              variants={buttonVariants}
              transition={{ duration: 4 }}
            >
              <Link passHref={true} href={`/${props.buttonLink}`}>
                <Button
                  className={subheadlineButton}
                  variant={`contained`}
                  color={`secondary`}
                  size={`large`}
                >
                  {props.buttonText}
                </Button>
              </Link>
            </motion.div>
          </div>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </Box>
  );
};

export default Subheadline;
