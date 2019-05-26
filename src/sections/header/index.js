import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles } from '@material-ui/styles';
import {
  List,
  ListItem,
  Drawer,
  Fab,
  Typography,
  Divider,
  Zoom,
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll';

// My Components
import MuiLink from '../../components/MuiLink';

const styles = theme => ({
  root: {},
  menu: {
    color: 'white',
    backgroundColor: theme.palette.background.primary,
    height: '100vh',
    minWidth: '250px',
    '& $a': {
      padding: '15px',
      '&:hover': {
        backgroundColor: cyan[500],
        cursor: 'pointer',
      },
    },
  },
  fab: {
    position: 'fixed',
    zIndex: '100',
    right: '20px',
    top: '20px',
    backgroundColor: 'darkgray',
    color: '#fff',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'dimgray',
    },
  },
});

const toggleDrawer = (setOpen, open) => (event) => {
  if (
    event.type === 'keydown'
    && (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setOpen(open);
};

const SideMenu = ({ setOpen, classes }) => {
  const data = useStaticQuery(
    graphql`
      query {
        contentfulHomePage {
          resume {
            file {
              url
              fileName
              contentType
            }
          }
          transcript {
            file {
              url
            }
          }
        }
      }
    `,
  );
  const { resume, transcript } = data.contentfulHomePage;
  const relativeLinks = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Contact' },
  ];
  const externalLinks = [
    { name: 'Resume', to: resume.file.url },
    { name: 'Transcript', to: transcript.file.url },
    {
      name: 'Source Code',
      to: 'https://github.com/rafibarash/rafibarash.github.io',
    },
  ];
  return (
    <div
      role="presentation"
      onClick={toggleDrawer(setOpen, false)}
      onKeyDown={toggleDrawer(setOpen, false)}
    >
      <div className={classes.menu}>
        <List>
          <ListItem
            component={Link}
            to="Home"
            onClick={toggleDrawer(setOpen, false)}
            spy
            smooth
            duration={700}
          >
            <Typography variant="h5">Rafi Barash</Typography>
          </ListItem>
          <Divider />
          {relativeLinks.map(link => (
            <ListItem
              component={Link}
              to={link.name}
              onClick={toggleDrawer(setOpen, false)}
              spy
              smooth
              duration={700}
              key={link.name}
            >
              <Typography variant="body1">{link.name}</Typography>
            </ListItem>
          ))}
          <Divider />
          {externalLinks.map(link => (
            <ListItem
              component={MuiLink}
              href={link.to}
              style={{ color: 'white', textDecoration: 'none' }}
              key={link.name}
            >
              <Typography variant="body1">{link.name}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

const Header = ({ classes }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Zoom in style={{ transitionDelay: '500ms' }}>
        <Fab
          onClick={() => setOpen(prevOpen => !prevOpen)}
          className={classes.fab}
        >
          <MenuIcon />
        </Fab>
      </Zoom>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(setOpen, false)}>
        <SideMenu setOpen={setOpen} classes={classes} />
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(Header);
