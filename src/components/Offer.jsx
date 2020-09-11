import React from 'react'
import styled from 'styled-components';
import { Container } from './style';
import BackgroundClip from '../assets/svgs/background-clip-01.svg';
// import BackgroundClip from '../assets/images/background-clip-01.png';
import scrollTo from 'gatsby-plugin-smoothscroll';
import BackgroundImage from 'gatsby-background-image'
import UnderlineLinkIcon from '../assets/svgs/offer-underline-link.svg';
import Img from 'gatsby-image';
// import { graphql, useStaticQuery } from 'gatsby'





const OfferSection = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    position: relative;
    width: 100%;
    padding: 12.2vw 0 5vw 0;
    height: 43.5vw;
    background-size: 'cover';
    background-repeat: 'no-repeat';
    background-size: '100%';
    @media only screen and (max-width: 575px) {
        display: none;
    }
`
const OfferMobileSection = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    display: none;
    position: relative;
    @media only screen and (max-width: 575px) {
        display: block;
        height: 134vw;
        position: relative;
        width: 100%;
        letter-spacing: 0em;
        background-size: 'cover';
        background-position: top center;
        background-repeat: 'no-repeat';
        padding: 28vw 10vw 0;    
    }
`

const OfferTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 6.9vw;
    color: white;
    line-height: 0.88;
    letter-spacing: -.4vw;
    width: 60vw;
    margin-bottom: 2.2vw;
    margin-left: -1.1vw;

    @media only screen and (max-width: 575px) {
        width: 100%;
        font-size: 18vw;
        letter-spacing: -1.3vw;
        width: 100px;
        margin-bottom: 17vw;
        width: 100%;
        line-height: 0.83;
        margin-left: -0.5vw;

        
    }
`
const OfferDescr = styled.div`
    margin-left: -.3vw;
    color: white;
    letter-spacing: .01vw;
    font-size: 2.32vw;
    line-height: 1;
    font-family: EB Garamond;
    font-style: italic;
    position: relative;
    font-weight: 500;
    svg {
        transition: opacity 0.2s ease;
        opacity: 1;
    }
    span {
        font-weight: inherit;
        font-size: inherit;
        font-family: inherit;
        color: inherit;
        letter-spacing: inherit;
        position: relative;
        :hover {
            cursor: pointer;
            svg {
                    opacity: 0;
            }
        }
        :focus {
            outline: none;
        }
        :active {
            outline: none;
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 7.2vw;
        margin-left: 1vw;
   
    }
`

const OfferUnderlineIcon = styled(props => <UnderlineLinkIcon {...props}/>)`
    width: 20.8vw;
    position: absolute;
    bottom: -1.1vw;
    left: 0.2vw;
    @media only screen and (max-width: 575px) {
        width: 65vw;
        bottom: -3.2vw;
    }

    
`

// const OfferSvgClip = styled(props => <BackgroundImage {...props}/>)`

//     // padding: 10vw;
//     left: 0;
//     display: block;
//     top: -4vw;
//     width: 100%;
//     z-index: 0;
//     background-size: 'cover';
//     background-repeat: 'no-repeat';
//     @media only screen and (max-width: 575px) {
//         width: 100%;
//     }
// `
const OfferSvgClip = styled(props => <BackgroundClip {...props}/>)`

    // padding: 10vw;
    position: relative;
    left: 0;
    display: block;
    top: -4vw;
    width: 100%;
    z-index: 0;
    background-size: 'cover';
    background-repeat: 'no-repeat';
    @media only screen and (max-width: 575px) {
        width: 100%;
    }
`

const OfferFlagsImg = styled(props => <Img {...props} />)`
    margin-left: 0.1vw;
    top: 0.2vw;
    width: 2vw;
    display: inline-block;
    @media only screen and (max-width: 575px) {
        width: 6vw;
        margin-left: 1.5vw;
    }
` 

const OfferShadowMobile = styled.div`

    // @media only screen and (max-width: 575px) {
    //     background: linear-gradient(180deg, rgba(0,0,0,0.6) 50%, rgba(45,45,45,0) 100%);
    //     position: absolute;
    //     width: 100%;
    //     height: 35vw;
    //     top: 0;
    //     left: 0;
    //     // z-index: 1000;
    // }

`





const Offer = ({data}) => {

        // const dataImage = useStaticQuery(graphql`
        //     query backgroundClip {
        //         clip: file(relativePath: { eq: "background-clip-01.png" }) {
        //             childImageSharp {
        //                 fluid(maxWidth: 2729) {
        //                     ...GatsbyImageSharpFluid
        //                 }
        //             }
        //         }

        //     }
        // `)

        // const imageData = dataImage.clip.childImageSharp.fluid


        const headerImage = data.edges[0].node.headerImage.fluid
        const headerImageMobile = data.edges[0].node.headerImageMobile.fluid       
        const headerSubtitleImage = data.edges[0].node.headerSubtitleImage.fluid
        const headerSubtitle_01 = data.edges[0].node.headerSubtitle_01
        const headerSubtitle_02 = data.edges[0].node.headerSubtitle_02
        const headerSubtitle_03 = data.edges[0].node.headerSubtitle_03
        const headerTitle = data.edges[0].node.headerTitle

    return (
        <>
            <OfferSection fluid={headerImage} id="offer" >

                <Container>
                    <OfferTitle>{headerTitle}</OfferTitle>
                    <OfferDescr>
                        {headerSubtitle_01} <OfferFlagsImg alt="flags" fluid={headerSubtitleImage} /> <br/> {headerSubtitle_02} <span tabIndex={0} role="button" onKeyDown={() => scrollTo('#manifest')} onClick={() => scrollTo('#manifest')}>{headerSubtitle_03} <OfferUnderlineIcon/></span>
                    </OfferDescr>
                </Container>

            </OfferSection>
            <OfferMobileSection fluid={headerImageMobile} id="offer" >
                <OfferShadowMobile></OfferShadowMobile>
                <Container>
                    <OfferTitle>{headerTitle}</OfferTitle>
                    <OfferDescr>
                        {headerSubtitle_01} <OfferFlagsImg alt="flags" fluid={headerSubtitleImage} /> <br/> {headerSubtitle_02} <span tabIndex={0} role="button" onKeyDown={() => scrollTo('#manifest')} onClick={() => scrollTo('#manifest')}>{headerSubtitle_03} <OfferUnderlineIcon/></span>
                    </OfferDescr>
                </Container>
                {/* <OfferSvgClip/> */}
            </OfferMobileSection>
            <OfferSvgClip/>
            {/* <OfferSvgClip style={{position: 'relative', 
                                background: 'black', 
                                height: '8vw',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center top'
                                }}  fluid={imageData}></OfferSvgClip> */}
        </>





    )
}


export default Offer


