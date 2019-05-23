import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const styles = {};

const PortfolioItem = ({ item }) => (
  <Grid item s={12}>
    {/* <img src={item.image} alt={item.title} /> */}
    {/* <p>{item.description}</p> */}
    <p>{item.title}</p>
  </Grid>
);

const PortfolioGrid = ({ portfolio, classes }) => (
  <Grid container>
    {portfolio.map(({ node: item }) => (
      <PortfolioItem item={item} key={item.title} />
    ))}
  </Grid>
);

export default withStyles(styles)(PortfolioGrid);
