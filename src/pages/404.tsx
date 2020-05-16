import React from "react"
import { Link } from "gatsby"
import BasicPage from "../components/basic"

export default () => (
  <BasicPage
    title="404 Page Not Found"
    description="Couldn't find the page you were looking for. Try Again."
  >
    <Link to="/">Home</Link>
  </BasicPage>
)
