import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export function BlogList() {
  const data = useStaticQuery(graphql`
    {
      allSitePage(filter: { path: { glob: "/blog/*" } }) {
        edges {
          node {
            path
            context {
              frontmatter {
                title
              }
            }
          }
        }
      }
    }
  `)
  return (
    <ol>
      {data.allSitePage.edges.map(edge => (
        <li>
          <Link to={edge.node.path}>{edge.node.context.frontmatter.title}</Link>
        </li>
      ))}
    </ol>
  )
}
