import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description = "", lang = "en", keywords = [] }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet titleTemplate={`%s | ${site.siteMetadata.title}`}>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:description" content={metaDescription} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  lang: PropTypes.string,
}

export default SEO
