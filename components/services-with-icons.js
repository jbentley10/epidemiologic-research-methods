/**
 * @file services-with-icons.js
 */
// Import dependencies
import { Button, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
          Our Services
        </Typography>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <CircleElement
            icon={<MedicationIcon className={icon} />}
            heading={"Pills!"}
            subtext={"Pills!"}
          />
        </Grid>

        <Grid item xs={3}>
          <CircleElement
            icon={<MedicationIcon className={icon} />}
            heading={"Pills!"}
            subtext={"Pills!"}
          />
        </Grid>

        <Grid item xs={3}>
          <CircleElement
            icon={<MedicationIcon className={icon} />}
            heading={"Pills!"}
            subtext={"Pills!"}
          />
        </Grid>

        <Grid item xs={3}>
          <CircleElement
            icon={<MedicationIcon className={icon} />}
            heading={"Pills!"}
            subtext={"Pills!"}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ServicesWithIcons;
