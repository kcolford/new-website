import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

export default function Tags({ data }) {
  return (
    <Layout>
      <SEO title="Blog Tags" description="Listing of blog tags" />
      <ul>
        {data.tags.group.map(group => (
          <li>
            <Link to={`/blog/tags/${group.fieldValue}`}>
              {group.fieldValue}
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    tags: allMdx(filter: { fields: { sourceInstanceName: { eq: "blog" } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
