const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField, createRedirect } = actions

  if (node.internal.type === "Mdx") {
    const { sourceInstanceName } = getNode(node.parent)
    createNodeField({
      node,
      name: `sourceInstanceName`,
      value: sourceInstanceName,
    })

    if (sourceInstanceName === `blog`) {
      const slug = `/blog` + createFilePath({ node, getNode })
      createNodeField({ node, name: `slug`, value: slug })
    }
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  let result = await graphql(`
    {
      allMdx {
        nodes {
          id
          fields {
            slug
            sourceInstanceName
          }
          frontmatter {
            tags
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allMdx.nodes.forEach(post => {
    if (post.fields.sourceInstanceName !== `blog`) {
      return
    }

    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: { id: post.id },
    })

    post.frontmatter.tags.forEach(tag => {
      createPage({
        path: `/blog/tags/${tag}`,
        component: path.resolve(`./src/templates/tags.tsx`),
        context: { tag: tag },
      })
    })
  })
}
