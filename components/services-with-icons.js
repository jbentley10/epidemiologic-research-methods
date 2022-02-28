/**
 * @file services-with-icons.js
 */
// Import dependencies
import { Grid, Typography } from "@mui/material";

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
import PsychologyIcon from '@mui/icons-material/Psychology';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import BugReportIcon from '@mui/icons-material/BugReport';

const CircleElement = (props) => {
  return (
    <div>
      <div className={circleIcon}>
        <div className={circleContent}>{props.icon}</div>
      </div>

      <div className={circleText}>
        <Typography variant={`h4`}>{props.heading}</Typography>
        <Typography variant={`paragraph`}>{props.subtext}</Typography>
      </div>
    </div>
  );
};

const ServicesWithIcons = () => {
  return (
    <div className={bannerContainer}>
      <div>
        <Typography className={heading} variant={`h2`}>
          Our Expertise
        </Typography>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<MedicationIcon className={icon} />}
            heading={"Drug safety"}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<PsychologyIcon className={icon} />}
            heading={"Mental Health and Substance Abuse"}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<WbSunnyIcon className={icon} />}
            heading={"Environmental Health"}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<CoronavirusIcon className={icon} />}
            heading={"Infectious Disease"}
          />
        </Grid>

        <Grid item xs={12} md={4} lg={3}>
          <CircleElement
            icon={<BugReportIcon className={icon} />}
            heading={"Neurologic Disease"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesWithIcons;
