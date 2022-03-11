/**
 * @file three-card-block.js
 */
// Import dependencies
import { Grid, Paper, Typography } from "@mui/material";

// Import styles
import { threeCardBlockContainer, blockContainer, paperContainer } from "../styles/ThreeCardBlock.module.scss";

const ThreeCardBlock = () => {
  return (
    <div className={threeCardBlockContainer}>
      <div className={blockContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}></Grid>
          <Grid item xs={12} md={7}>
            <Paper className={paperContainer}>
              <Typography variant="h3">Analytics Services</Typography>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={blockContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Paper className={paperContainer}>
              <Typography variant="h3">Analytics Services</Typography>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </Paper>
          </Grid>
          <Grid item xs={12} md={5}></Grid>
        </Grid>
      </div>
      <div className={blockContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}></Grid>
          <Grid item xs={12} md={7}>
            <Paper className={paperContainer}>
              <Typography variant="h3">Analytics Services</Typography>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
                <li>List item 3</li>
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ThreeCardBlock;
