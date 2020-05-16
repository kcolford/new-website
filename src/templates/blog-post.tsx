import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from "../components/seo"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const mdx = data.allMdx.edges[0].node
  return (
    <MDXProvider>
      <Layout>
        <SEO description={mdx.excerpt} />
        <MDXRenderer>{mdx.body}</MDXRenderer>
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
  }
`
