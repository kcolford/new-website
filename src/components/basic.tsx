import React from "react"
import { InferProps } from "prop-types"
import PropTypes from "prop-types"
import SEO from "./seo"
import Layout from "./layout"

export const BasicPage = ({
  title,
  description,
  children,
}: InferProps<typeof BasicPage.propTypes>) => (
  <Layout>
    <SEO title={title} description={description} />
    <h1>{title}</h1>
    {description}

    {children}
  </Layout>
)

BasicPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.node,
}

export default BasicPage
