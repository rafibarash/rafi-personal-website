import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { Link, Element } from 'react-scroll';
import Typed from 'react-typed';

// My Components
import Button from '../../components/Button';

const styles = (theme) => ({
  root: {
    width: '100%',
    height: '100vh',
    minHeight: '100vh',
    background: theme.palette.background.default,
    padding: '8rem 0',
    display: 'flex',
    textAlign: 'center',
  },
  box: {
    marginTop: 'auto',
    marginBottom: 'auto',
    width: '100%',
  },
  welcomeText: {
    marginBottom: '2rem',
    fontSize: '2rem',
    minHeight: '100px',
    // textAlign: 'left',
  },
});

const WelcomeText = ({ classes }) => (
  <div className={classes.welcomeText}>
    <Typed
      strings={[
        'Hi there!',
        "I'm a software engineer.",
        "I'm a web developer.",
        "I'm a tennis/basketball player.",
        "I'm a snowboarder.",
        "I'm a hip-hip/rap lover.",
        'Welcome to my website!',
      ]}
      typeSpeed={33}
      backSpeed={25}
      backDelay={1000}
      showCursor
      cursorChar="|"
    />
  </div>
);

const Showcase = ({ classes }) => (
  <Element name="Home">
    <div className={classes.root}>
      <Box className={classes.box}>
        <Container maxWidth="md">
          {/* My introduction */}
          <Typography variant="h1" style={{ marginBottom: '25px' }}>
            Rafi Barash
          </Typography>
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
    </div>
  </Element>
);

export default withStyles(styles)(Showcase);
