import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Tags({ data }) {
  return (
    <Layout>
      <SEO title="Blog Tags" description="Listing of blog tags" />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    allMdx(filter: { fields: { sourceInstanceName: { eq: "blog" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
