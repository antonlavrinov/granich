import React from 'react'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Link } from 'gatsby';
import pageUpImg from '../assets/images/page-up-01.png'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';
// const PageUpWrapper = styled(props => <PageUpIcon {...props}/>)`
//     width: 3.6vw;
//     height: 3.6vw;
//     transition: all 0.3s ease;
//     :hover {
//         cursor: pointer;
//         transform: scale(1.1)
//     }
//     @media only screen and (max-width: 575px) {
//         width: 11vw;
//         height: 11vw;
//     }
// `

const PageUpWrapperImg = styled(props => <Img {...props}/>)`
    width: 3.6vw;
    height: 3.6vw;
    transition: all 0.3s ease;
    :hover {
        cursor: pointer;
        transform: scale(1.1)
    }
    @media only screen and (max-width: 575px) {
        width: 11vw;
        height: 11vw;
    }
`

const PageUpWrapperMobile = styled(props => <Link {...props}/>)`
    display: none;
    @media only screen and (max-width: 575px) {
        display: block;
    }
`

const PageUpWrapperDesktop = styled.div`
    display: block;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`




const PageTop = () => {
    const data = useStaticQuery(graphql`
        query sidePageIcons {
            pageTopIcon: file(relativePath: { eq: "page-up-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData = data.pageTopIcon.childImageSharp.fluid

    return (
        <>
            <PageUpWrapperDesktop onClick={() => scrollTo('#header')}>
                <PageUpWrapperImg fluid={imageData} />
            </PageUpWrapperDesktop>
            <PageUpWrapperMobile  to="#header">
                <PageUpWrapperImg fluid={imageData} />
            </PageUpWrapperMobile>
        </>
        
    )
}

export default PageTop

