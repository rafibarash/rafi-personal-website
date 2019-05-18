import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-scroll";

// My Components
import Button from "../components/Button";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100vh",
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
    marginBottom: "3rem",
  },
});

const WelcomeText = ({ classes }) => (
  <div>
    <Typography variant="h2" component="h1" className={classes.welcomeText}>
      Hi I'm Rafi Barash
    </Typography>
  </div>
);

const Showcase = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Box className={classes.box}>
        <Container maxWidth="md">
          <WelcomeText classes={classes} />
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="about"
            spy
            smooth
            // offset={-50}
            duration={700}
          >
            About Me
          </Button>
        </Container>
      </Box>
    </div>
  );
};

export default withStyles(styles)(Showcase);
