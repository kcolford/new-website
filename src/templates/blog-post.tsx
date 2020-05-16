import React from "react"
import { graphql, Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import Layout from "../components/layout"
import getTitle from "../utils/getTitle"

export default function BlogPost({ data }) {
  const edge = data.allMdx.edges[0]
  return (
    <MDXProvider>
      <Layout>
        <SEO title={getTitle(edge.node)} description={edge.node.excerpt} />
        <MDXRenderer>{edge.node.body}</MDXRenderer>
        <br />
        {edge.previous && (
          <Link to={edge.previous.fields.slug}>{getTitle(edge.previous)}</Link>
        )}
        {edge.next && (
          <Link to={edge.next.fields.slug}>{getTitle(edge.next)}</Link>
        )}
      </Layout>
    </MDXProvider>
  )
}

export const pageQuery = graphql`
  query BlogPost($id: String) {
    allMdx(filter: { id: { eq: $id } }) {
      edges {
        next {
          ...getSlug
        }
        node {
          excerpt
          body
          ...GetTitle
        }
        previous {
          ...getSlug
        }
      }
    }
  }
  fragment getSlug on Mdx {
    fields {
      slug
    }
    ...GetTitle
  }
`
