let remarkPlugins = [
  `gatsby-remark-copy-linked-files`,
  `gatsby-remark-smartypants`,
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
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: "GTM-KN3M4BF" },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.kcolford.com`,
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kieran Colford`,
        short_name: `kcolford`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
