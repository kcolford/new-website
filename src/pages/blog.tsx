import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, ListItem } from "@material-ui/core"

export default function Blog({ data }) {
  const posts = data.allMdx.nodes
  return (
    <Layout>
      <SEO title="Blog" description="Blog posts" />
      <List>
        {posts.map(node => (
          <ListItem key={node.id}>
            <Link to={node.fields.slug}>{node.excerpt}</Link>
          </ListItem>
        ))}
      </List>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogList {
    allMdx {
      nodes {
        id
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
