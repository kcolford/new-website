let remarkPlugins = [
  `gatsby-remark-copy-linked-files`,
  {
    resolve: `gatsby-remark-images`,
    options: { maxWidth: 800 },
  },
]

module.exports = {
  siteMetadata: {
    title: `Kieran Colford`,
    description: `A blog of my thoughts and ideas.`,
    author: `@kcolford`,
    siteUrl: `https://www.kcolford.com`,
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
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
	gatsbyRemarkPlugins: remarkPlugins,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
	plugins: remarkPlugins,
      },
    },
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-45606820-1" },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
	name: `gatsby-starter-default`,
	short_name: `starter`,
	start_url: `/`,
	background_color: `#663399`,
	theme_color: `#663399`,
	display: `minimal-ui`,
	icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
