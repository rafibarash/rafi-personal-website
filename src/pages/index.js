import React from 'react';

// Components
import Layout from '../components/Layout';
import SEO from '../components/Seo';

// Sections
import Showcase from '../sections/showcase';
import About from '../sections/about';
import Portfolio from '../sections/portfolio';
import Contact from '../sections/contact';

const IndexPage = () => (
  <Layout>
    <SEO />
    <Showcase />
    <About />
    <Portfolio />
    <Contact />
  </Layout>
);

export default IndexPage;
