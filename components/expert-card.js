/**
 * @file expert-card.js
 */

// Import dependencies
import * as React from "react";
import Image from "next/image";
import Typography from "@mui/material/Typography";
import { Button, Paper, Grid } from "@mui/material";

// Import styles
import { PaperCard, ExpertText } from '../styles/ExpertCard.module.scss';

export default function ExpertCard(props) {
  return (
    <Paper className={PaperCard}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <Image
            layout={`responsive`}
            src={`https:${props.image.file.url}`}
            width={props.image.file.details.image.width}
            height={props.image.file.details.image.height}
            alt={props.image.file.details.image.description}
          />
        </Grid>
        <Grid item xs={0} md={1} />
        <Grid className={ExpertText} item xs={12} md={5}>
          <Typography gutterBottom variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography variant="subtitle" color="text.hint">
            {props.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {props.description}
          </Typography>
          <br />
          <a target="_blank" href={props.resumeLink} rel={"noreferrer"}>
            <Button size="small" variant={`contained`} color="secondary">
              View CV
            </Button>
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
}
