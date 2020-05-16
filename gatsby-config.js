const path = require("path")

let data = {
  title: `Kieran Colford`,
  author: `Kieran Colford`,
  description: `A blog of my thoughts and ideas.`,
  siteUrl: `https://www.kcolford.com`,
  social: [
    { name: `Twitter`, url: `https://twitter.com/KieranColford` },
    { name: `Github`, url: `https://github.com/kcolford` },
  ],
}

let googleServiceAccount = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT || "null"
)

module.exports = {
  siteMetadata: data,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1920 },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: { trackingId: "UA-45606820-1" },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: { id: "GTM-KN3M4BF" },
    },
    googleServiceAccount && {
      resolve: `gatsby-plugin-guess-js`,
      options: {
        GAViewID: `78883169`,
        jwt: {
          client_email: googleServiceAccount.client_email,
          private_key: googleServiceAccount.private_key,
        },
        period: {
          startDate: new Date("2020-05-03"),
          endDate: new Date(),
        },
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: data.siteUrl,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: data.title,
        short_name: `kcolford`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ].filter(Boolean),
}
