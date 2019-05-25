import React from 'react';
import { Container, Box } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Link, Element } from 'react-scroll';
import Typed from 'react-typed';

// My Components
import Button from '../../components/Button';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    minHeight: '100vh',
    background: theme.palette.background.default,
    padding: '8rem 0',
    display: 'flex',
  },
  box: {
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
  },
  welcomeText: {
    marginBottom: '3.5rem',
    fontSize: '4rem',
  },
});

const WelcomeText = ({ classes }) => (
  <div className={classes.welcomeText}>
    <Typed
      strings={[
        "Hi, I'm a <strong>college student.</strong>",
        "Hi, I'm a <strong>developer.</strong>",
        "Hi, I'm <strong>Rafi Barash.</strong>",
      ]}
      typeSpeed={33}
      backSpeed={25}
      backDelay={750}
      showCursor
      cursorChar="|"
    />
  </div>
);

const Showcase = ({ classes }) => (
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

export default withStyles(styles)(Showcase);
