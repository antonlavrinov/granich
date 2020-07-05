import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components';


const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  position: absolute;
  top: 0;
  left: 0;
  // clip-path: url(#clipPath);



`




const OfferBackgroundImage = () => {
    const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ezgif.com-webp-to-png (1).png" }) {
        childImageSharp {
          fluid(maxWidth: 1980) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <ImageWrapper>
          <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{height: `50vw`,
                                                                          minHeight: `500px`,
                                                                        maxHeight: `800px`,
                                                                      }}/>
        </ImageWrapper>

    )
}

export default OfferBackgroundImage
