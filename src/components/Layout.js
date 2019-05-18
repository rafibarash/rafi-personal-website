import React from "react";
import { withStyles } from "@material-ui/styles";

import Header from "../sections/Header";
import Footer from "../sections/Footer";

const styles = {
  root: {},
};

const Layout = props => {
  const { children, classes } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default withStyles(styles)(Layout);
