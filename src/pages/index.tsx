import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

export default () => (
  <Layout>
    <SEO title="Home Page" />
    <h1>Hello People!</h1>
    Welcome to my humble abode.
    <ul>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
    </ul>
  </Layout>
)
