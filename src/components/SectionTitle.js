import React from "react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {
  title: {
    paddingBottom: "2rem",
    fontWeight: "bold",
  },
};

const SectionTitle = props => {
  const { children, classes } = props;
  return (
    <Typography
      variant="h4"
      component="h1"
      className={classes.title}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default withStyles(styles)(SectionTitle);
