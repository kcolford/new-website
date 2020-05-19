import React from 'react'
import CanonicalUrl from "../components/canonical-url"

export const wrapPageElement = ({ element, props }) => (
  <CanonicalUrl {...props}>{element}</CanonicalUrl>
)

export default wrapPageElement
