module.exports = {
  siteMetadata: {
    title: 'My page',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark', // utilize markdown text (not sure i need cause internal markdown component)
    'gatsby-plugin-top-layout', // internal plugin. page wrapper for material ui (similar to withRoot)
    'gatsby-plugin-material-ui', // not sure if useful or not
    'gatsby-plugin-react-helmet', // for seo purposes
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Rafi Barash Personal Website',
        short_name: 'Rafi',
        start_url: '/',
        background_color: '#6b37bf',
        theme_color: '#6b37bf',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'src/img/logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline', // must be after gatsby-plugin-manifest
    'gatsby-plugin-netlify-cms', // for netlify cms functionality
    'gatsby-plugin-netlify', // supposed to be last, mostly for relative links
  ],
};
