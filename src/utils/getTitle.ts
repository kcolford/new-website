import { graphql } from "gatsby"

export interface NodeTitle {
  headers: { value: string }[]
  frontmatter: { title: string }
}

export default function getTitle(node: NodeTitle) {
  return node.frontmatter.title || node.headers[0].value
}

export const query = graphql`
  fragment GetTitle on Mdx {
    headings(depth: h1) {
      value
    }
    frontmatter {
      title
    }
  }
`
