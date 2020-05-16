import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import getTitle from "../utils/getTitle"

export default function Tags({ pageContext, data }) {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  return (
    <Layout>
      <SEO title={`Posts tagged ${tag}`} />
      <h1>Posts tagged {tag}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          return (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>{getTitle(node)}</Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          ...GetTitle
        }
      }
    }
  }
`
