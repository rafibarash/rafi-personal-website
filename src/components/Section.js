import React from "react";
import { Container, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

const styles = {};

const Section = props => {
  const { children, bgColor, maxWidth, color } = props;
  return (
    <div style={{ backgroundColor: bgColor }}>
      <Container maxWidth={maxWidth}>
        <Box py={10} textAlign="center" style={{ color: color }}>
          {children}
        </Box>
      </Container>
    </div>
  );
};

export default withStyles(styles)(Section);
