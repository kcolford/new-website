import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, ListItem } from "@material-ui/core"
import getTitle from "../utils/getTitle"

export default function Blog({ data }) {
  const posts = data.posts.nodes
  return (
    <Layout>
      <SEO title="Blog" description="Blog posts" />
      <List>
        {posts.map(post => (
          <ListItem key={post.id}>
            <Link to={post.fields.slug}>{getTitle(post)}</Link>
          </ListItem>
        ))}
      </List>
      <Link to="tags/">All Tags</Link>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    posts: allMdx {
      nodes {
        id
        excerpt
        ...GetTitle
        fields {
          slug
        }
      }
    }
  }
`
