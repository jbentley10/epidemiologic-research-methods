/**
 *
 * @file expert-listing.js
 */
// Import styles
import { expertListingContainer } from "../styles/ExpertListing.module.scss";
import ExpertCard from "./expert-card";

const ExpertListing = (props) => {
  
  return (
    <div className={expertListingContainer}>
      {props.expertsText.map((expert, index) => (
        <ExpertCard
          key={index}
          name={expert.fields.name}
          title={expert.fields.suffix}
          description={expert.fields.bio}
          resumeLink={`https:${props.expertsCVs[index].fields.file.url}`}
          image={props.expertsPhotos[index].fields}
        />
      ))}
    </div>
  );
};

export default ExpertListing;
