import React from "react";
import { withStyles } from "@material-ui/styles";
import { Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Link } from "react-scroll";

const styles = {
  root: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    backgroundColor: "darkgray",
    color: "#fff",
    borderRadius: "5px",
    "&:hover": {
      backgroundColor: "dimgray",
    },
  },
};

const ScrollToTop = ({ classes }) => {
  return (
    <Fab
      className={classes.root}
      component={Link}
      to="showcase"
      spy
      smooth
      // offset={50}
      duration={700}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
};

export default withStyles(styles)(ScrollToTop);
