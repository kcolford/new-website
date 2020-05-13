import React from 'react'
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'

export default function Backgound({ children }) {
    const data = useStaticQuery(graphql`{
        file(relativePath: {eq: "header-background.jpg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`)
    return (
        <BackgroundImage fixed={data.file.childImageSharp.fluid}>
            {children}
        </BackgroundImage>
    )
}

Backgound.PropTypes = {
    children: PropTypes.node.isRequired,
}