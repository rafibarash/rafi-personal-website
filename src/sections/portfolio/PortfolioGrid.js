import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/styles';
import { Grid, Link, Typography } from '@material-ui/core';

const styles = {
  root: {
    // flexGrow: 1,
  },
  item: {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    // maxWidth: '530px',
    // width: '350px',
    // height: '300px',
    // border: '2px solid black',
  },
  img: {
    // zIndex: '-1',
    width: '100%',
    height: '400px',
    filter: 'brightness(40%)',
    // transition: '0.25 ease-out',
    transition: 'all 0.3s',
    '&:hover': {
      // clipPath: 'inset(2rem)',
      transform: 'scale(1.1)',
    },
  },
  content: {
    position: 'absolute',
    bottom: '20px',
    padding: '0 15px',
    textAlign: 'left',
    color: 'white',
    zIndex: '1',
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
  <Grid item xs={12} md={6}>
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
    <Grid container>
      {portfolio.map(({ node: item }) => (
        <PortfolioItem item={item} key={item.title} classes={classes} />
      ))}
    </Grid>
  </div>
);

export default withStyles(styles)(PortfolioGrid);
