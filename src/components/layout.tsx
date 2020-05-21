import React from "react"
import PropTypes from "prop-types"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Kieran Colford</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="tabs" defaultActiveKey="">
            <Nav.Item>
              <Nav.Link as={Link} to="">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="blog">
                Blog
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <main>{children}</main>
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
