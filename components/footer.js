/**
 * @file footer.js
 */
// Import dependencies
import { Typography, Grid } from "@mui/material";

// Import styles
import { footerContainer, headingText, linkList, copyrightContainer } from "../styles/Footer.module.scss";

// Import icons
import MedicationIcon from "@mui/icons-material/Medication";

const Footer = () => {
  return (
    <div className={footerContainer}>
      <Grid container spacing={5}>
        <Grid item xs={4} md={3}>
          <Typography variant={"h5"} className={headingText}>
            Epidemiologic Research & Methods, LLC
          </Typography>
        </Grid>
        <Grid item xs={4} md={3}>
          <Typography variant={"h5"} className={headingText}>
            Learn about us
          </Typography>
          <ul className={linkList}>
            <li>
              <Typography variant={'body1'}>Link 1</Typography>
              </li>
            <li><Typography variant={'body1'}>Link 2</Typography></li>
            <li>Link 3</li>
          </ul>
        </Grid>
        <Grid item xs={4} md={3}>
          <Typography variant={"h5"} className={headingText}>
            Other links
          </Typography>
          <ul className={linkList}>
            <li>
              <Typography variant={'body1'}>Link 1</Typography>
              </li>
            <li><Typography variant={'body1'}>Link 2</Typography></li>
            <li>Link 3</li>
          </ul>
        </Grid>
        <Grid item xs={4} md={3}>
          <MedicationIcon/>
        </Grid>
      </Grid>
      <div className={copyrightContainer}>
        <Typography variant={"body1"}>
          Copyright 2022
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
