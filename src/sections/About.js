import React from "react";
import { Typography, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/styles";
import { Link } from "react-scroll";

// My Components
import Section from "../components/Section";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";

const styles = theme => ({
  root: {},
  icon: {
    color: "white",
  },
  socialTitle: {
    fontWeight: "bold",
  },
});

/* <li class="nav-item mx-1">
            <a href="https://github.com/rafibarash" target="_blank"
              ><i class="fab fa-github-square fa-3x" style="color: white;"></i
            ></a>
          </li>
          <li class="nav-item mx-1">
            <a href="https://open.spotify.com/user/1215854478" target="_blank"
              ><i class="fab fa-spotify fa-3x" style="color: lightgreen;"></i
            ></a>
          </li>
          <li class="nav-item mx-1">
            <a
              href="https://www.goodreads.com/user/show/49531496-rafi-barash"
              target="_blank"
              ><i class="fab fa-goodreads fa-3x" style="color: ghostwhite;"></i
            ></a>
          </li>
          <li class="nav-item mx-1">
            <a href="https://www.instagram.com/rafibarash/" target="_blank"
              ><i class="fab fa-instagram fa-3x" style="color: lightpink;"></i
            ></a>
          </li>
          <li class="nav-item mx-1">
            <a href="https://www.linkedin.com/in/rafi-barash/" target="_blank"
              ><i class="fab fa-linkedin fa-3x" style="color: skyblue;"></i
            ></a>
          </li> */

const SocialMedia = ({ classes }) => (
  <Box mb={4}>
    <Typography variant="h6" component="h3" className={classes.socialTitle}>
      Connect With Me
    </Typography>
    <Box>
      <p>need to add icons here</p>
    </Box>
  </Box>
);

const About = props => {
  const { classes } = props;
  const theme = useTheme();
  return (
    <Section
      bgColor={theme.palette.background.primary}
      maxWidth="md"
      color="white"
      name="About"
    >
      <SectionTitle color="inherit">About</SectionTitle>
      <Typography paragraph color="inherit">
        My name is Rafi Barash and I'm a Junior majoring in Computer Science at
        the University of Minnesota, with a specialization in AI and Big Data.
        I'm passionate about machine learning and big data analytics, as well as
        full-stack web development. Minnesota Club Tennis and slack-lining are
        also pretty cool. This summer I will complete a software engineering
        internship at Google.
      </Typography>
      <SocialMedia classes={classes} />
      <Button
        variant="contained"
        color="default"
        component={Link}
        to="Portfolio"
        spy
        smooth
        // offset={50}
        duration={700}
      >
        Portfolio
      </Button>
    </Section>
  );
};

export default withStyles(styles)(About);
