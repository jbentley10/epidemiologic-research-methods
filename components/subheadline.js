/**
 * @file subheadline.js
 */
// Import dependencies
import { Button, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from 'next/link';

// Import styles
import {
  subheadlineContainer,
  subheadlineImage,
  textContainer,
  headingText,
  subheadlineButton,
} from "../styles/Subheadline.module.scss";

const Subheadline = () => {
  return (
    <Box className={subheadlineContainer} id="main">
      <Grid container spacing={10}>
        <Grid item xs={1} />
        <Grid item xs={12} md={4}>
          <Image
            src={`/images/scientist.webp`}
            layout={`intrinsic`}
            height={500}
            width={300}
            alt={`Scientist experimenting in a lab.`}
            className={subheadlineImage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} className={textContainer}>
            <Typography className={headingText} variant={`h3`}>
              We are a full-service provider for all phases of epidemiologic
              study design.
            </Typography>
            <Typography variant={`body1`}>
              With 15 team members including three Senior Epidemilogists, we
              provide expertise in substantive areas.
            </Typography>
            <div>
              <Link href={`/experts`}>
                <Button
                  className={subheadlineButton}
                  variant={`contained`}
                  color={`primary`}
                  size={`large`}
                >
                  Meet the Team
                </Button>
              </Link>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={1} />
      </Grid>
    </Box>
  );
};

export default Subheadline;
