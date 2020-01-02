import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Typography, Box } from '@material-ui/core';

// My Components
import MuiLink from '../../components/MuiLink';

const styles = {};

const Footer = ({ classes }) => (
  <Box py={10} textAlign="center">
    <Typography paragraph>Built by Rafael Barash</Typography>
    <Typography paragraph>
      Check out that
      {'  '}
      <MuiLink href="https://github.com/rafibarash/rafi-personal-website">
        source code
      </MuiLink>
    </Typography>
    <Typography paragraph>
      Currently on version 3 of my website &middot;
      {'  '}
      <MuiLink href="https://rafibarash.github.io/v2">v2</MuiLink>
      {'  '}
      &middot;
      {'  '}
      <MuiLink href="https://rafibarash.github.io/v1">v1</MuiLink>
    </Typography>
  </Box>
);

export default withStyles(styles)(Footer);
