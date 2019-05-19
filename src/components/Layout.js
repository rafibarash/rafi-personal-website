import React from 'react';
import { withStyles } from '@material-ui/styles';

import ScrollToTop from './ScrollToTop';
import Header from '../sections/header';
import Footer from '../sections/footer';

const styles = {
  root: {},
};

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
    <ScrollToTop />
  </div>
);

export default withStyles(styles)(Layout);
