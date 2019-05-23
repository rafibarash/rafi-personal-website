import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/styles';

// My Components
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import PortfolioGrid from './PortfolioGrid';

const styles = {};

const PortfolioSection = () => {
  const theme = useTheme();
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulPortfolio {
          edges {
            node {
              title
              description
              picture {
                fluid(maxWidth: 1000) {
                  ...GatsbyContentfulFluid_withWebp
                }
              }
            }
          }
        }
      }
    `,
  );
  const { edges: portfolio } = data.allContentfulPortfolio;
  return (
    <Section
      bgColor={theme.palette.background.default}
      maxWidth="md"
      name="Portfolio"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <PortfolioGrid portfolio={portfolio} />
    </Section>
  );
};

export default withStyles(styles)(PortfolioSection);
