import React, { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { List, ListItem, Drawer, Fab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const styles = {
  root: {
    position: "fixed",
    right: "20px",
    top: "20px",
  },
  fab: {
    backgroundColor: "darkgray",
    color: "#fff",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "dimgray",
    },
  },
};

const toggleDrawer = (setOpen, open) => event => {
  if (
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }

  setOpen(open);
};

const SideMenu = ({ setOpen }) => (
  <div
    role="presentation"
    onClick={toggleDrawer(setOpen, false)}
    onKeyDown={toggleDrawer(setOpen, false)}
  >
    <List>
      <ListItem>hi eugene hows the weather</ListItem>
      <ListItem>bye</ListItem>
      <ListItem>why</ListItem>
    </List>
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
        <SideMenu setOpen={setOpen} />
      </Drawer>
    </div>
  );
};

export default withStyles(styles)(Header);
