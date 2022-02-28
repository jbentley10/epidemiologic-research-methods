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
  textContainer,
  headingText,
  subheadingText,
  subheadlineImage,
  subheadlineButton,
} from "../styles/Subheadline.module.scss";

const Subheadline = () => {
  return (
    <Box>
      <Grid container spacing={10}>
        <Grid item xs={12} md={6} lg={4} className={subheadlineImage} />
        <Grid item xs={12} md={6} lg={9}>
          <div className={textContainer}>
            <Typography className={headingText} variant={`h3`}>
              We are a full-service provider for all phases of epidemiologic
              study design.
            </Typography>
            <Typography className={subheadingText} variant={`body1`}>
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
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Subheadline;
