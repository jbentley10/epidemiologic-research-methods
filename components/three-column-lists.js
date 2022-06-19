/**
 * @file three-column-lists.js
 */
// Import dependencies
import { Grid, Typography } from "@mui/material";

// Import styles
import { columnsContainer, columnContainer } from '../styles/ThreeColumnLists.module.scss';

const ThreeColumnLists = ({
  column1Heading,
  column1Body,
  column2Heading,
  column2Body,
  column3Heading,
  column3Body,
}) => {
  return (
    <Grid className={columnsContainer} container>
      <Grid className={columnContainer} item md={3}>
        <Typography variant={"h4"}>{column1Heading}</Typography>
        <div className={`column-list`}>
          {column1Body}
        </div>
      </Grid>

      <Grid className={columnContainer} item md={3}>
        <Typography variant={"h4"}>{column2Heading}</Typography>
        <div className={`column-list`}>
          {column2Body}
        </div>
      </Grid>

      <Grid className={columnContainer} item md={3}>
        <Typography variant={"h4"}>{column3Heading}</Typography>
        <div className={`column-list`}>
          {column3Body}
        </div>
      </Grid>
    </Grid>
  );
};

export default ThreeColumnLists;
