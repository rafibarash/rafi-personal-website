import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { Element } from "react-scroll";

// My Components
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const styles = {};

const Portfolio = props => {
  // const { classes } = props;
  const theme = useTheme();
  return (
    <Element name="portfolio">
      <Section bgColor={theme.palette.background.default} maxWidth="md">
        <SectionTitle color="inherit">Portfolio</SectionTitle>
        <Typography paragraph color="inherit">
          My Portfolio
        </Typography>
      </Section>
    </Element>
  );
};

export default withStyles(styles)(Portfolio);
