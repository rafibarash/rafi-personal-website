import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Box, Link } from '@material-ui/core';

const styles = {};

const Footer = ({ classes }) => (
  <Box py={10} textAlign="center">
    <Typography paragraph>Built by Rafi Barash</Typography>
    <Typography variant="body1">
      Currently on version 3 of my website &middot;
      {'  '}
      <Link
        href="https://rafibarash.github.io/v2"
        target="_blank"
        rel="noopener"
      >
        v2
      </Link>
      {'  '}
      &middot;
      {'  '}
      <Link
        href="https://rafibarash.github.io/v1"
        target="_blank"
        rel="noopener"
      >
        v1
      </Link>
    </Typography>
  </Box>
);

export default withStyles(styles)(Footer);
