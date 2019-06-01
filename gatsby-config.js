const dotenv = require('dotenv');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { CONTENTFUL_ACCESS_TOKEN } = process.env;

const contentfulConfig = {
  spaceId: '30diawm8d36r',
  accessToken: CONTENTFUL_ACCESS_TOKEN,
};

module.exports = {
  siteMetadata: {
    title: 'Rafi Barash',
    description: `My name is Rafi Barash and I'm a Junior majoring in Computer Science 
      at the University of Minnesota, with a specialization in AI and Big Data.`,
    author: 'Rafi Barash',
    siteUrl: 'https://rafibarash.com',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-140680912-1',
        // Puts tracking script in the head instead of the body
        // head: false,
        // // Setting this parameter is optional
        // anonymize: true,
        // // Setting this parameter is also optional
        // respectDNT: true,
        // // Avoids sending pageview hits from custom paths
        // exclude: ['/preview/**', '/do-not-track/me/too/'],
        // // Enables Google Optimize using your container Id
        // optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        // // Enables Google Optimize Experiment ID
        // experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        // // Set Variation ID. 0 for original 1,2,3....
        // variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        // // Any additional create only fields (optional)
        // sampleRate: 5,
        // siteSpeedSampleRate: 10,
        // cookieDomain: 'example.com',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp', // gatsby wrapper of sharp image transformer library
    {
      resolve: 'gatsby-source-contentful', // get contentful data for graphql queries
      options: contentfulConfig,
    },
    'gatsby-plugin-material-ui', // not sure if useful or not
    'gatsby-plugin-robots-txt', // generates robots.txt with build
    'gatsby-plugin-sitemap', // generates sitemap with build
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
        icon: 'logo.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline', // must be after gatsby-plugin-manifest
    'gatsby-plugin-netlify', // supposed to be last, mostly for relative links
  ],
};
