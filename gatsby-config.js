/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images`,
  },

   plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ],
}
