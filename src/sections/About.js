import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { Element } from "react-scroll";

// My Components
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";

const styles = theme => ({
  root: {},
});

const About = props => {
  const { classes } = props;
  const theme = useTheme();
  return (
    <Element name="about">
      <Section
        bgColor={theme.palette.background.primary}
        maxWidth="md"
        color="white"
      >
        <SectionTitle color="inherit">About Rafi Barash</SectionTitle>
        <Typography paragraph color="inherit">
          My name is Rafi Barash and I'm a Junior majoring in Computer Science
          at the University of Minnesota, with a specialization in AI and Big
          Data. I'm passionate about machine learning and big data analytics, as
          well as full-stack web development. Minnesota Club Tennis and
          slack-lining are also pretty cool. This summer I will complete a
          software engineering internship at Google.
        </Typography>
      </Section>
    </Element>
  );
};

export default withStyles(styles)(About);
