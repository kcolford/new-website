import { graphql } from "gatsby"

export interface NodeTitle {
  headers: { value: string }[]
  frontmatter: { title: string }
}

export const getTitle = (node: NodeTitle) =>
  node.frontmatter.title || node.headers[0].value

export default getTitle

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
