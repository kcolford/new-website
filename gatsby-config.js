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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-45606820-1" },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-canonical-urls`,
    `gatsby-plugin-netlify`,
  ],
}
