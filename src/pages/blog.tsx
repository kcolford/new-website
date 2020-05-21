import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import getTitle from "../utils/getTitle"
import { ListGroup, Row, Col, Jumbotron } from "react-bootstrap"

const Blog = ({ data }) => {
  const posts = data.posts.nodes
  return (
    <Layout>
      <SEO title="Blog" description="Blog posts" />
      <Jumbotron>
        <h1>Hello</h1>
      </Jumbotron>
      <Row>
        <ListGroup>
          {posts.map(post => (
            <ListGroup.Item key={post.id}>
              <Col>
                <Link to={post.fields.slug}>{getTitle(post)}</Link>
              </Col>
              <Col>{post.excerpt}</Col>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>
      <Row>
        <Col>
          <p>
            <Link to="blog/tags">All Tags</Link>{" "}
            <Link to="rss.xml">My Feed</Link>
          </p>
        </Col>
      </Row>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  {
    posts: allMdx {
      nodes {
        id
        excerpt
        ...GetTitle
        fields {
          slug
        }
      }
    }
  }
`
