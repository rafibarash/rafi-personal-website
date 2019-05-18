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

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Section
      bgColor={theme.palette.background.secondary}
      maxWidth="md"
      color="white"
    >
      <SectionTitle color="inherit">Contact Rafi Barash</SectionTitle>
      <Typography paragraph color="inherit">
        Contact me
      </Typography>
    </Section>
  );
};

export default Contact;
