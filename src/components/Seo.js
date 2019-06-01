/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const realTitle = title || site.siteMetadata.title;
  const titleTemplate = title ? `%s | ${realTitle}` : realTitle;
  const author = site.siteMetadata;
  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
      }}
      title={realTitle}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'viewport',
          content:
            'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no',
        },
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: realTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: realTitle,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700',
          rel: 'stylesheet',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ]}
    />
  );
}

export default SEO;
