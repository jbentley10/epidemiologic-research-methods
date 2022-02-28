/**
 * @file footer.js
 */
// Import styles
import { Typography } from "@mui/material";
import { footerContainer, headingText } from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={footerContainer}>
      <Typography variant={"h5"} className={headingText}>
        Epidemiologic Research & Methods, LLC
      </Typography>
      <Typography variant={"body1"}>
        Copyright 2022
      </Typography>
    </div>
  );
};

export default Footer;
