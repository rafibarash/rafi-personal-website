import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Box } from '@material-ui/core';
import { Link, Element } from 'react-scroll';

// My Components
import ThreeCanvas from './ThreeCanvas';
import Button from '../../components/Button';

const styles = {
  btnBox: {
    position: 'absolute',
    bottom: '10%',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
  },
};

const Showcase = ({ classes }) => (
  <Element name="Home">
    <ThreeCanvas />
    <Box className={classes.btnBox}>
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
    </Box>
  </Element>
);

export default withStyles(styles)(Showcase);
