module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-netlify-cms",
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-react-helmet",
  ],
  siteMetadata: {
    title: "My page",
  },
};
