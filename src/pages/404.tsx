import React from "react"
import { Link } from "gatsby"
import BasicPage from "../components/basic"

const Error404 = () => (
  <BasicPage
    title="404 Page Not Found"
    description="Couldn't find the page you were looking for. Try Again."
  >
    <Link to="/">Home</Link>
  </BasicPage>
)

export default Error404
