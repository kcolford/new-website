import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"
import PropTypes from 'prop-types';

export interface PageQuery {
  location: {
    pathname: string
  }
  children: React.ElementType
}

export const CanonicalUrl = ({ location, children }: PageQuery) => {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `)
  return (
    <>
    <Helmet>
      <link rel="canonical" href={site.siteMetadata.siteUrl + location.pathname} />
    </Helmet>
    {children}
    </>
  )
}

CanonicalUrl.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.element,
}

export default CanonicalUrl
