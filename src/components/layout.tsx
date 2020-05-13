import * as React from "react"
import * as PropTypes from "prop-types"
import SEO from "./seo"
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"

const Layout = ({ children, _frontmatter }) => {
  let { title } = _frontmatter
  return (
    <Typography>
      <Container maxWidth="sm">
        <SEO title={title} />
        <main>{children}</main>
     </Container>
   </Typography>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
