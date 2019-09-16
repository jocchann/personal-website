module.exports = {
  siteMetadata: {
    title: `Joanna Chan - Front-end Developer`,
    description: ``,
    author: `Joanna`,
    socialsData: [
      {
        name: `github`,
        link: `https://github.com/jocchann`,
        target: `_blank`
      },
      {
        name: `linkedin`,
        link: `https://www.linkedin.com/in/joannacchan/`,
        target: `_blank`
      },
      {
        name: `email`,
        link: `mailto:jochdev@gmail.com`,
        target: `_blank`
      }
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#a566ed`,
        theme_color: `#a566ed`,
        display: `minimal-ui`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
