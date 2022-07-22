/**
 * @file subheadline.js
 */
// Import dependencies
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import Image from "next/image";

// Import styles
import {
  mainGrid,
  textContainer,
  subheadlineButton,
} from "../styles/Subheadline.module.scss";

const Subheadline = (props) => {
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
            <div>{props.headingText}</div>

            <div>{props.paragraphText}</div>

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
          </div>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    </Box>
  );
};

export default Subheadline;
