import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { Fab, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-scroll';

const styles = {
  root: {
    position: 'fixed',
    right: '20px',
    bottom: '20px',
    backgroundColor: 'darkgray',
    color: '#fff',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'dimgray',
    },
  },
};

const ScrollToTop = ({ classes }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset === 0) {
        setShow(false);
      } else {
        setShow(true);
      }
    };
  });
  return (
    <>
      {show && (
        <Zoom in>
          <Fab
            className={classes.root}
            component={Link}
            to="Home"
            spy
            smooth
            duration={700}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </Zoom>
      )}
    </>
  );
};

export default withStyles(styles)(ScrollToTop);
