import React from "react";
import { withStyles } from "@material-ui/styles";
import { Button as MuiButton } from "@material-ui/core";

const styles = {
  root: {
    padding: "1rem 2rem",
  },
};

const Button = props => {
  const { classes, children } = props;
  return (
    <MuiButton className={classes.root} {...props}>
      {children}
    </MuiButton>
  );
};

export default withStyles(styles)(Button);
