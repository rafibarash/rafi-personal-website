import React from 'react';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../theme';

import ScrollToTop from './ScrollToTop';
import Header from '../sections/header';
import Footer from '../sections/footer';

const styles = {
  root: {},
};

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  </ThemeProvider>
);

export default withStyles(styles)(Layout);
