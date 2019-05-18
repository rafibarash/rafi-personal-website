import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

const Footer = props => {
  const classes = useStyles();
  return (
    <div>
      <Typography variant="body1">Hi I'm the footer</Typography>
    </div>
  );
};

export default Footer;
