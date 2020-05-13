import * as React from "react"
import * as PropTypes from "prop-types"
import SEO from "./seo"
import { Container } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, _frontmatter }) => {
  let { title, description } = _frontmatter
  const data = useStaticQuery(graphql`{
    site {
      siteMetadata {
        title
      }
    }
  }`)
  return (
    <Container maxWidth="md">
      <SEO title={title || data.site.siteMetadata.title} description={description} />
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
