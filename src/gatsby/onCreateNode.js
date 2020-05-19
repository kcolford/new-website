const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

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
