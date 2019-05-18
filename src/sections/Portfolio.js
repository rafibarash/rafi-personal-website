import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";

// My Components
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const useStyles = makeStyles({
  root: {},
});

const Portfolio = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Section
      bgColor={theme.palette.background.default}
      maxWidth="md"
      // color="black"
    >
      <SectionTitle color="inherit">Portfolio</SectionTitle>
      <Typography paragraph color="inherit">
        My Portfolio
      </Typography>
    </Section>
  );
};

export default Portfolio;
