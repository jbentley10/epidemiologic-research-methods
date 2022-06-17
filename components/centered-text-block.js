/**
 * @file centered-text-block.js
 */
// Import dependencies
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Import styles
import {
  textContainer,
  headingText,
  subheadingText,
} from "../styles/CenteredTextBlock.module.scss";

const CenteredTextBlock = ({headingCopy, paragraphCopy}) => {
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

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <Box>
      <div className={textContainer}>
        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={controls}
          variants={headingVariants}
          transition={{ duration: 2 }}
        >
          <Typography className={headingText} variant={`h3`}>
            {headingCopy}
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
            {paragraphCopy}
          </Typography>
        </motion.div>
      </div>
    </Box>
  );
};

export default CenteredTextBlock;
