import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

const styles = {};

const NoMatch = () => (
  <>
    <Typography variant="h1">404 Page</Typography>
  </>
);

export default withStyles(styles)(NoMatch);
