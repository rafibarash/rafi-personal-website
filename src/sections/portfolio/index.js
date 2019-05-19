import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Typography } from '@material-ui/core';
import { withStyles, useTheme } from '@material-ui/styles';

// My Components
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';

const styles = {};

const PortfolioSection = () => {
  const theme = useTheme();
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { frontmatter: { title: { ne: "" }, image: { ne: "" } } }
        ) {
          edges {
            node {
              frontmatter {
                title
                description
                image
              }
            }
          }
        }
      }
    `,
  );
  const { edges: portfolios } = data.allMarkdownRemark;
  return (
    <Section
      bgColor={theme.palette.background.default}
      maxWidth="md"
      name="Portfolio"
    >
      <SectionTitle>Portfolio</SectionTitle>
      <Typography paragraph>My Portfolio</Typography>
    </Section>
  );
};

export default withStyles(styles)(PortfolioSection);
