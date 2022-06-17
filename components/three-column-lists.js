/**
 * @file three-column-lists.js
 */
// Import dependencies
import { Grid, Typography } from "@mui/material";

// Import styles
import { columnsContainer, columnContainer } from '../styles/ThreeColumnLists.module.scss';

const ThreeColumnLists = ({
  column1Heading,
  columh1List,
  column2Heading,
  columh2List,
  column3Heading,
  columh3List,
}) => {
  return (
    <Grid className={columnsContainer} container>
      <Grid className={columnContainer} item md={3}>
        <Typography variant={"h4"}>{column1Heading}</Typography>
        <ul className={`column-list`}>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
        </ul>
      </Grid>

      <Grid className={columnContainer} item md={3}>
        <Typography variant={"h4"}>{column2Heading}</Typography>
        <ul className={`column-list`}>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
        </ul>
      </Grid>

      <Grid className={columnContainer} item md={3}>
        <Typography variant={"h4"}>{column3Heading}</Typography>
        <ul className={`column-list`}>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
          <li>lorem ipsum solor dut amet codipiscing elit.</li>
        </ul>
      </Grid>
    </Grid>
  );
};

export default ThreeColumnLists;
