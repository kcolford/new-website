const path = require("path")

module.exports = async ({ graphql, actions }) => {
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
