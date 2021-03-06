import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography, Box, Grow } from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/styles';
import { Link } from 'react-scroll';
import {
  FaGithub,
  FaSpotify,
  FaGoodreads,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa';

// My Components
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button';
import MuiLink from '../../components/MuiLink';

const styles = theme => ({
  root: {},
  icon: {
    textDecoration: 'none',
    // color: 'white',
    fontSize: '3em',
    marginRight: '6px',
  },
  socialTitle: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
});

const SocialMedia = ({ classes }) => {
  const socialMedia = [
    {
      name: 'Github',
      icon: FaGithub,
      url: 'https://github.com/rafibarash',
      color: 'white',
    },
    {
      name: 'Spotify',
      icon: FaSpotify,
      url: 'https://open.spotify.com/user/1215854478',
      color: 'lightgreen',
    },
    {
      name: 'Goodreads',
      icon: FaGoodreads,
      url: 'https://www.goodreads.com/user/show/49531496-rafi-barash',
      color: 'ghostwhite',
    },
    {
      name: 'Instagram',
      icon: FaInstagram,
      url: 'https://www.instagram.com/rafibarash/',
      color: 'lightpink',
    },
    {
      name: 'Linkedin',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/rafi-barash/',
      color: 'skyblue',
    },
  ];
  return (
    <Box mb={4}>
      <Typography variant="h6" component="h3" className={classes.socialTitle}>
        Connect With Me
      </Typography>
      <Box>
        {socialMedia.map(icon => (
          <MuiLink
            href={icon.url}
            className={classes.icon}
            style={{ color: icon.color }}
            key={icon.url}
            aria-label={icon.name}
          >
            {icon.icon()}
          </MuiLink>
        ))}
      </Box>
    </Box>
  );
};

const About = ({ classes }) => {
  const theme = useTheme();
  const data = useStaticQuery(
    graphql`
      query {
        contentfulHomePage {
          about {
            about
          }
        }
      }
    `
  );
  const { about } = data.contentfulHomePage.about;
  return (
    <Section
      bgColor={theme.palette.background.primary}
      maxWidth="md"
      color="white"
      name="About"
    >
      <SectionTitle color="inherit">About</SectionTitle>
      <Typography paragraph color="inherit">
        {about}
      </Typography>
      <SocialMedia classes={classes} />
      <Button
        variant="contained"
        color="default"
        component={Link}
        to="Portfolio"
        spy
        smooth
        duration={700}
      >
        Portfolio
      </Button>
    </Section>
  );
};

export default withStyles(styles)(About);
