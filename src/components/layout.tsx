import React from "react"
import PropTypes from "prop-types"
import { Container } from "@material-ui/core"

const Layout = ({ children }) => {
  return (
    <Container maxWidth="md">
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
