import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/styles';
import { Grid, Link, Typography } from '@material-ui/core';

const styles = {
  root: {
    flexGrow: 1,
  },
  item: {
    position: 'relative',
    // width: '400px',
    // height: '300px',
    // border: '2px solid black',
  },
  img: {
    width: '100%',
    height: '100%',
    filter: 'brightness(40%)',
  },
  content: {
    position: 'absolute',
    top: '20px',
    padding: '0 15px',
    textAlign: 'left',
    color: 'white',
    // left: '20px',
  },
  title: {
    // position: 'absolute',
    // top: '10px',
    // left: '10px',
    marginBottom: '25px',
  },
  caption: {
    // position: 'absolute',
    // bottom: '10px',
    // left: '10px',
  },
};

const PortfolioItem = ({ item, classes }) => (
  <Grid item xs={12} m={6}>
    <div className={classes.item}>
      <Link href="https://github.com/rafibarash">
        <Img fluid={item.picture.fluid} className={classes.img} />
        <div className={classes.content}>
          <Typography className={classes.title}>{item.title}</Typography>
          <Typography className={classes.caption}>
            {item.description}
          </Typography>
        </div>
      </Link>
    </div>
  </Grid>
);

const PortfolioGrid = ({ portfolio, classes }) => (
  <div className={classes.root}>
    <Grid container spacing={3}>
      {portfolio.map(({ node: item }) => (
        <PortfolioItem item={item} key={item.title} classes={classes} />
      ))}
    </Grid>
  </div>
);

export default withStyles(styles)(PortfolioGrid);
