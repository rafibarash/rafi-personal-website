import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { withStyles, useTheme } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

// My Components
import Section from '../../components/Section';
import SectionTitle from '../../components/SectionTitle';
import ContactForm from './ContactForm';

const styles = (theme) => ({
  intro: {
    paddingBottom: '25px',
  },
});

const Contact = ({ classes }) => {
  const theme = useTheme();
  const data = useStaticQuery(
    graphql`
      query {
        contentfulHomePage {
          contact {
            contact
          }
        }
      }
    `
  );
  const { contact } = data.contentfulHomePage.contact;
  return (
    <Section
      bgColor={theme.palette.background.secondary}
      maxWidth="md"
      color="white"
      name="Contact"
    >
      <SectionTitle color="inherit">HMU</SectionTitle>
      <Typography paragraph color="inherit" className={classes.intro}>
        {contact}
      </Typography>
      <ContactForm />
    </Section>
  );
};

export default withStyles(styles)(Contact);
