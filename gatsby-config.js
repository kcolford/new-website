let data = {
  title: `Kieran Colford`,
  author: `Kieran Colford`,
  description: `A blog of my thoughts and ideas.`,
  siteUrl: `https://www.kcolford.com`,
}

let googleServiceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT || "null")

module.exports = {
  siteMetadata: data,
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 800 },
          },
          `gatsby-remark-copy-linked-files`,
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
      options: { trackingId: "UA-45606820-1"},
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
          startDate: new Date('2020-05-03'),
          endDate: new Date(),
        },
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: data.siteUrl,
      },
    },
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: data.title,
        short_name: `kcolford`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ].filter(Boolean),
}
