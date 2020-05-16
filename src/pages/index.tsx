import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { List, ListItem, Card, Button } from "@material-ui/core"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <SEO title="Home Page" />
    <h1>Hello People!</h1>
    Welcome to my humble abode.
    <Card>
      <List>
        <ListItem>
          <Link to="blog/">
            <Button variant="contained">Blog</Button>
          </Link>
        </ListItem>
      </List>
    </Card>
  </Layout>
)
