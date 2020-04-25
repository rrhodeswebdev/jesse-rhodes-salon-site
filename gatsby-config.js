module.exports = {
  siteMetadata: {
    title: `Jesse Rhodes | Stylist & Extension Specialist`,
    description: `Jesse Rhodes is a master stylist, advanced extension artist, and passionate hair educator located in Concord, NC. Reach out if you want to book an appointment or need a consultation.`,
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
        name: `Jesse Rhodes Website`,
        short_name: `Jesse Rhodes`,
        start_url: `/`,
        background_color: `#e0ddd7`,
        theme_color: `#b18e72`,
        display: `minimal-ui`,
        icon: ``, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
