const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (
    node.internal.type === `Mdx` &&
    getNode(node.parent).sourceInstanceName === `posts`
  ) {
    const value = `/blog` + createFilePath({ node, getNode })
    createNodeField({ name: `slug`, node, value })
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
          }
        }
      }
    }
  `)
  if (result.errors) {
    throw result.errors
  }

  result.data.allMdx.nodes.forEach(post => {
    createPage({
      path: post.fields.slug,
      component: path.resolve(`./src/templates/blog-post.tsx`),
      context: { id: post.id },
    })
  })
}
