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
        path: `${__dirname}/blog`,
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
        icon: `blog/icon.png`,
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
            match: `^/blog/`,
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
                }
              }
            }
            `,
            serialize: ({
              query: {
                allMdx: { nodes: posts },
                site: { siteMetadata },
              },
            }) => {
              return posts.map(post => {
                return {
                  title: post.frontmatter.title || post.headings[0].value,
                  description: post.frontmatter.description || post.excerpt,
                  url: siteMetadata.siteUrl + post.fields.slug,
                  date: post.frontmatter.date,
                  categories: post.frontmatter.tags,
                }
              })
            },
          },
        ],
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ].filter(Boolean),
}
