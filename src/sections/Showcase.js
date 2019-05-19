import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link, Element } from "react-scroll";

// My Components
import Button from "../components/Button";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100vh",
    minHeight: "100vh",
    background: theme.palette.background.default,
    padding: "8rem 0",
    display: "flex",
  },
  box: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
    width: "100%",
  },
  welcomeText: {
    marginBottom: "3.5rem",
  },
});

const WelcomeText = ({ classes }) => (
  <div>
    <Typography variant="h2" component="h1" className={classes.welcomeText}>
      Hi, I'm <b>Rafi Barash</b>
    </Typography>
  </div>
);

const Showcase = props => {
  const { classes } = props;
  return (
    <Element name="Home" className={classes.root}>
      <Box className={classes.box}>
        <Container maxWidth="md">
          <WelcomeText classes={classes} />
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="About"
            spy
            smooth
            // offset={-50}
            duration={700}
          >
            About Me
          </Button>
        </Container>
      </Box>
    </Element>
  );
};

export default withStyles(styles)(Showcase);
