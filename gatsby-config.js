module.exports = {
  siteMetadata: {
    title: 'Rafi Barash',
    description: `My name is Rafi Barash and I'm a Junior majoring in Computer Science 
      at the University of Minnesota, with a specialization in AI and Big Data.`,
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/sections`,
        name: 'sections',
      },
    },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: 'images',
    //   },
    // },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp', // gatsby wrapper of sharp image transformer library
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {
    //     plugins: [
    //       // 'gatsby-remark-relative-images', // must be before gatsby-remark-images
    //       {
    //         resolve: 'gatsby-remark-relative-images',
    //         options: {
    //           name: 'uploads', // Must match the source name ^
    //         },
    //       },
    //       {
    //         resolve: 'gatsby-remark-images',
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           // maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },
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
