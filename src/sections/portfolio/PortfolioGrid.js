import React from 'react';
import Img from 'gatsby-image';
import { withStyles } from '@material-ui/styles';
import {
 Grid, Typography, Container, Box 
} from '@material-ui/core';

// My Components
import MuiLink from '../../components/MuiLink';

const styles = theme => ({
  item: {
    position: 'relative',
    display: 'block',
    maxWidth: '530px',
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      transition: '0.5s ease',
    },
  },
  img: {
    filter: 'brightness(40%)',
    width: '100%',
    height: '325px',
    // marginBottom: '1rem',
    [theme.breakpoints.up('md')]: {
      filter: 'brightness(70%)',
      // marginBottom: '0',
    },
  },
  caption: {
    display: 'flex',
    position: 'absolute',
    top: 0,
    bottom: 0,
    height: '100%',
    width: '100%',
    opacity: '1',
    [theme.breakpoints.up('md')]: {
      transition: '0.5s ease',
      backgroundColor: `${theme.palette.primary.main}`,
      opacity: '0',
      '&:hover': {
        opacity: '0.8',
      },
    },
  },
  captionContent: {
    color: 'white',
    textAlign: 'left',
    margin: 'auto 3rem 3rem',
    transition: '0.5s ease',
    [theme.breakpoints.up('md')]: {
      opacity: '1',
    },
  },
  title: {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  descr: {},
});

const PortfolioItem = ({ item, classes }) => (
  <Grid item xs={12} md={6}>
    <MuiLink href={item.link} className={classes.item}>
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
