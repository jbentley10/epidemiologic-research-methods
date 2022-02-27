/**
 * @file subheadline.js
 */
// Import dependencies
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

// Import styles
import {
  subheadlineContainer,
  subheadlineImage,
  textContainer,
  headingText,
  subheadlineButton
} from "../styles/Subheadline.module.scss";

const Subheadline = () => {
  return (
    <Box className={subheadlineContainer} id="main">
      <Grid container spacing={10}>
        <Grid item xs={1} />
        <Grid item xs={5}>
          <Image
            src={`/images/scientist.webp`}
            layout={`intrinsic`}
            height={500}
            width={300}
            alt={`Scientist experimenting in a lab.`}
            className={subheadlineImage}
          />
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={2} className={textContainer}>
            <Typography className={headingText} variant={`h3`}>
              We are a full-service provider for all phases of epidemiologic
              study design.
            </Typography>
            <Typography variant={`paragraph`}>
              With 15 team members including three Senior Epidemilogists, we provide
              expertise in substantive areas.
            </Typography>
            <div>
              <Button className={subheadlineButton} variant={`contained`} color={`primary`}>Meet the Team</Button>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Subheadline;
