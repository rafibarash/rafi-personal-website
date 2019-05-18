import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// Components
import Layout from "../components/Layout";

// Sections
import Showcase from "../sections/Showcase";
import About from "../sections/About";
import Portfolio from "../sections/Portfolio";
import Contact from "../sections/Contact";

const IndexPage = () => (
  <Layout>
    <Showcase />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
