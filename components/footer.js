/**
 * @file footer.js
 */
// Import dependencies
import { Typography } from "@mui/material";

// Import styles
import { footerContainer, headingText } from "../styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={footerContainer}>      
      <Typography variant={"h5"} className={headingText}>
      &copy;{`${new Date().getFullYear()}`}{" "}Epidemiologic Research & Methods, LLC
      </Typography>
          
      <Typography variant={"body1"}>
        Site design by <Link href="https://palmspringswebdesign.net" target='_blank'>Palm Springs Web Design</Link>
      </Typography>     
    </div>
  );
};

export default Footer;
