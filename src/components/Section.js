import React from "react";
import { Container, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { Element } from "react-scroll";

const styles = {};

const Section = props => {
  const { children, bgColor, maxWidth, color, name } = props;
  return (
    <Element name={name} style={{ backgroundColor: bgColor }}>
      <Container maxWidth={maxWidth}>
        <Box py={10} textAlign="center" style={{ color: color }}>
          {children}
        </Box>
      </Container>
    </Element>
  );
};

export default withStyles(styles)(Section);
