/**
 * @file three-card-block.js
 */
// Import dependencies
import { Grid, Paper, Typography } from "@mui/material";

// Import styles
import { threeCardBlockContainer, blockContainer, paperContainer } from "../styles/ThreeCardBlock.module.scss";

const ThreeCardBlock = (props) => {
  return (
    <div className={threeCardBlockContainer}>
      <div className={blockContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}></Grid>
          <Grid item xs={12} md={7}>
            <Paper className={paperContainer}>
              <Typography variant="h3">{props.service1Header}</Typography>
              {props.service1Body}
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={blockContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <Paper className={paperContainer}>
              <Typography variant="h3">{props.service2Header}</Typography>
              {props.service2Body}
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
              <Typography variant="h3">{props.service3Header}</Typography>
              {props.service3Body}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ThreeCardBlock;
