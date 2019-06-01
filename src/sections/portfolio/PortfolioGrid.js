import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/styles';
import { Grid, Typography, Container } from '@material-ui/core';

// My Components
import MuiLink from '../../components/MuiLink';

const styles = theme => ({
  item: {
    position: 'relative',
    display: 'block',
    maxWidth: '530px',
    margin: 'auto',
    // border: '1px solid black',
  },
  img: {
    // zIndex: '-1',
    width: '100%',
    height: '325px',
    filter: 'brightness(40%)',
    // transition: '0.25 ease-out',
    transition: 'all 0.3s',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '1rem',
    },
    '&:hover': {
      // clipPath: 'inset(2rem)',
      // transform: 'scale(1.1)',
    },
  },
  caption: {
    display: 'flex',
    height: '100%',
    width: '100%',
    backgroundColor: 'fade-out(gray, 0.8)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    padding: '0 15px',
    textAlign: 'left',
    color: 'white',
    zIndex: '1',
  },
  captionContent: {
    color: 'white',
    margin: 'auto 2rem 2rem',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  descr: {},
});

const PortfolioItem = ({ item, classes }) => (
  <Grid item xs={12} md={6}>
    <div className={classes.item}>
      <MuiLink href={item.link}>
        <Img fluid={item.picture.fluid} className={classes.img} />
        <div className={classes.caption}>
          <div className={classes.captionContent}>
            <Typography variant="subtitle1" className={classes.title}>
              {item.title}
            </Typography>
            <Typography paragraph className={classes.descr}>
              {item.description}
            </Typography>
          </div>
        </div>
      </MuiLink>
    </div>
  </Grid>
);

const PortfolioGrid = ({ portfolio, classes }) => (
  <Grid container>
    {portfolio.map(({ node: item }) => (
      <PortfolioItem item={item} key={item.title} classes={classes} />
    ))}
  </Grid>
);

export default withStyles(styles)(PortfolioGrid);
