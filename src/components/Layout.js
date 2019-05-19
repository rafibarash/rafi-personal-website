import React from "react";
import { withStyles } from "@material-ui/styles";

import ScrollToTop from "./ScrollToTop";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

const styles = {
  root: {},
};

const Layout = props => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default withStyles(styles)(Layout);
