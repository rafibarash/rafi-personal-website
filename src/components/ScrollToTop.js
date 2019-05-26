import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import { Fab } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Link } from 'react-scroll';
import classnames from 'classnames';

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
  show: {},
  fade: {
    display: 'none',
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
    <Fab
      className={classnames(classes.root, {
        [classes.show]: show,
        [classes.fade]: !show,
      })}
      component={Link}
      to="Home"
      spy
      smooth
      duration={700}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default withStyles(styles)(ScrollToTop);
