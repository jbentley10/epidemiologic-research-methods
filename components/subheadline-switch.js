/**
 * @file subheadline-switch.js
 */
// Import dependencies
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Import styles
import {
  subheadlineContainer,
  textContainer,
  headingText,
  subheadingText,
} from "../styles/SubheadlineSwitch.module.scss";

const SubheadlineSwitch = (props) => {
  return (
    <Box className={subheadlineContainer}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div className={textContainer}>
            <Typography className={headingText} variant={`h3`}>
              {props.headingText}
            </Typography>
            <Typography className={subheadingText} variant={`body1`}>
              {props.paragraphText}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={6} />
      </Grid>
    </Box>
  );
};

export default SubheadlineSwitch;
