import React, { useState } from 'react';
import { withStyles } from '@material-ui/styles';
import {
  List,
  ListItem,
  Drawer,
  Fab,
  Typography,
  Divider,
} from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-scroll';

const styles = theme => ({
  root: {
    position: 'fixed',
    right: '18px',
    top: '18px',
  },
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
    backgroundColor: 'darkgray',
    color: '#fff',
    fontSize: '8px',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: 'dimgray',
    },
  },
});

const links = [
  { name: 'Home' },
  { name: 'About' },
  { name: 'Portfolio' },
  { name: 'Contact' },
];

const toggleDrawer = (setOpen, open) => (event) => {
  if (
    event.type === 'keydown'
    && (event.key === 'Tab' || event.key === 'Shift')
  ) {
    return;
  }

  setOpen(open);
};

const SideMenu = ({ setOpen, classes }) => (
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
          spy
          smooth
          // offset={50}
          duration={700}
        >
          <Typography variant="h5">Rafi Barash</Typography>
        </ListItem>
        <Divider />
        {links.map(link => (
          <ListItem
            component={Link}
            to={link.name}
            spy
            smooth
            // offset={50}
            duration={700}
          >
            <Typography variant="body1">{link.name}</Typography>
          </ListItem>
        ))}
      </List>
    </div>
  </div>
);

const Header = ({ classes }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.root}>
      <Fab
        onClick={() => setOpen(prevOpen => !prevOpen)}
        className={classes.fab}
      >
        <MenuIcon />
      </Fab>
      <Drawer open={open} anchor="right" onClose={toggleDrawer(setOpen, false)}>
        <SideMenu setOpen={setOpen} classes={classes} />
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(Header);