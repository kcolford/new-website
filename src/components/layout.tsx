import * as React from "react"
import * as PropTypes from "prop-types"
import SEO from "./seo"
import { Container } from "@material-ui/core"

const Layout = ({ children, _frontmatter }) => {
  let { title, description } = _frontmatter
  return (
    <Container maxWidth="md">
      <SEO title={title} description={description} />
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
