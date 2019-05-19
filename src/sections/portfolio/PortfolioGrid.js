import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

const styles = {};

const PortfolioItem = ({ item }) => (
  <Grid item cols={1}>
    {/* <img src={item.image} alt={item.title} /> */}
    {/* <p>{item.description}</p> */}
    <p>{item.image.slice(3)}</p>
  </Grid>
);

const PortfolioGrid = ({ portfolio, classes }) => (
  <Grid container>
    {portfolio.map(({ node: item }) => (
      <PortfolioItem item={item.frontmatter} key={item.frontmatter.title} />
    ))}
  </Grid>
);

export default withStyles(styles)(PortfolioGrid);
