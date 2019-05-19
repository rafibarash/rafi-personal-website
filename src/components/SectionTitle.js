import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
  title: {
    paddingBottom: '2rem',
    fontWeight: 'bold',
  },
};

const SectionTitle = ({ children, classes, color }) => (
  <Typography
    variant="h4"
    component="h1"
    color={color}
    className={classes.title}
  >
    {children}
  </Typography>
);

export default withStyles(styles)(SectionTitle);
