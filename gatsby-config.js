const path = require("path")

const googleServiceAccount = JSON.parse(
  process.env.GOOGLE_SERVICE_ACCOUNT || "null"
)

const siteMetadata = {
  title: `Kieran Colford`,
  author: `Kieran Colford`,
  description: `A blog of my thoughts and ideas.`,
  siteUrl: `https://www.kcolford.com`,
}

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `src`, `images`),
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: path.join(__dirname, `blog`),
        name: `blog`,
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
        GAViewID: process.env.GA_VIEW_ID || `78883169`,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteMetadata.title,
        short_name: `kcolford`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
        feeds: [
          {
            output: `/rss.xml`,
            title: `Kieran Colford's RSS Feed`,
            query: `
            {
              allMdx(
                sort: { order: DESC, fields: [frontmatter___date]},
              ) {
                nodes {
                  excerpt
                  fields { slug }
                  frontmatter {
                    title
                    date
                    description
                    tags
                  }
                  headings(depth: h1) {
                    value
                  }
                  internal {
                    contentDigest
                  }
                }
              }
            }
            `,
            serialize: ({
              query: {
                allMdx: { nodes: posts },
                site: { siteMetadata },
              },
            }) =>
              posts.map(post => ({
                title: post.frontmatter.title || post.headings[0].value,
                description: post.frontmatter.description || post.excerpt,
                url: siteMetadata.siteUrl + post.fields.slug,
                date: post.frontmatter.date,
                categories: post.frontmatter.tags,
                guid: post.internal.contentDigest,
              })),
          },
        ],
      },
    },
    `gatsby-plugin-nprogress`,
    `gatsby-plugin-react-helmet-canonical-urls-easy`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ].filter(Boolean),
}
