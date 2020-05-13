import * as React from "react"
import * as PropTypes from "prop-types"
import SEO from "./seo"
import { AppBar, Toolbar, Typography, Container } from "@material-ui/core"
import Backgound from "./background"
import Center from 'react-center'

const Layout = ({ children, _frontmatter }) => {
  let { title } = _frontmatter
  return (
    <Typography>
        <Center>
          <Container maxWidth="lg">
            <SEO title={title} />
            <main>{children}</main>
          </Container>
        </Center>
   </Typography>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
