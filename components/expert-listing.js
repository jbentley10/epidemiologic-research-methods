/**
 *
 * @file expert-listing.js
 */
// Import styles
import { Grid } from "@mui/material";
import { expertListingContainer } from "../styles/ExpertListing.module.scss";
import ExpertCard from "./expert-card";

const ExpertListing = () => {
  return (
    <div className={expertListingContainer}>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6} md={4}>
          <ExpertCard
            name={"W. Dana Flanders"}
            title={"MD, DSc, MPH, MA"}
            description={
              "W. Dana Flanders is a professor in the Department of Biostatistics and Bioinformatics and in the Department of Epidemiology with Rollins School of Public Health, Emory University. Dr. Flanders is a member of the Cancer Prevention and Control Research Program at Winship Cancer Institute."
            }
            resumeLink={`/download/cv/dana.pdf`}
            imageLink={`/staff/w-dana-flanders.jpeg`}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ExpertCard
            name={"Michael Goodman"}
            title={"MD, MPH"}
            description={
              "Michael Goodman is a Professor at the Department of Epidemiology, Emory University Rollins School of Public Health. He is an epidemiologist and a licensed physician with formal training and practice experience in Pediatrics and Preventive Medicine."
            }
            resumeLink={`/download/cv/mike.pdf`}
            imageLink={`/staff/Mike.jpeg`}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ExpertCard
            name={"Anne Dilley"}
            title={"PhD, MPH"}
            description={
              "Anne Dilley is an epidemiologist with over 30 years of experience in both government and pharmaceutical industry settings.  Her expertise spans standard and novel epidemiological methodology, pharmacoepidemiology, design and conduct of insurance claims and electronic medical record database studies, registry design and implementation, and designing and implementating focused safety studies to meet post-authorization regulatory requirements.  "
            }
            resumeLink={`/download/cv/anne.pdf`}
            imageLink={`/staff/Anne.png`}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <ExpertCard
            name={"Cathy Lally"}
            title={"MSPH"}
            description={
              "Cathy Lally is an epidemiologist specializing in data analytics, database design, data management, project management, and SAS programming with over 30 years of research experience in multiple fields of epidemiology including Genetic Epidemiology, Pharmacoepidemiology, and Environmental and Occupational Health."
            }
            resumeLink={`/download/cv/cathy.pdf`}
            imageLink={`/staff/w-dana-flanders.jpeg`}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default ExpertListing;
