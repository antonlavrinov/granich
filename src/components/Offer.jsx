import React from 'react'
import styled from 'styled-components';

import { Container } from './style';
import flags from '../assets/images/flags.png';
import background from '../assets/images/background.jpg';
import stick from '../assets/images/descr-stick.png';
import BackgroundClip from '../assets/svgs/background-clip-01.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import UnderlineLinkIcon from '../assets/svgs/offer-underline-link.svg';
import Img from 'gatsby-image';





const OfferSection = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    position: relative;
    width: 100%;
    padding: 12.2vw 0 5vw 0;
    height: 43.5vw;
    background-size: 'cover';
    background-repeat: 'no-repeat';
    background-size: '100%';
    @media only screen and (max-width: 575px) {
        height: 124vw;
        letter-spacing: 0em;
        background-size: 150%;
        background-position: center top;
        background-repeat: 'no-repeat';
        padding: 20vw 0 0 0;


        
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
        font-size: 17vw;
        letter-spacing: -.8vw;
        width: 100px;
        margin-bottom: 17vw;
        width: 100%;

        
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
    span {
        font-weight: inherit;
        font-size: inherit;
        font-family: inherit;
        color: inherit;
        letter-spacing: inherit;
        position: relative;
        :hover {
            cursor: pointer;
        }
    }
    @media only screen and (max-width: 575px) {
        font-size: 7.2vw;
        margin-left: -1vw;
   
    }
`

const OfferUnderlineIcon = styled(props => <UnderlineLinkIcon {...props}/>)`
    width: 20.8vw;
    position: absolute;
    bottom: -1.1vw;
    left: 0.2vw;
    // left: 1.8em;
    @media only screen and (max-width: 575px) {
        width: 65vw;
        bottom: -3.2vw;
    }

    
`

const OfferSvgClip = styled(props => <BackgroundClip {...props}/>)`
    position: absolute;
    bottom: -2.5vw;
    width: 100%;
    
    z-index: 0;
    @media only screen and (max-width: 575px) {
        display: none;
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





const Offer = ({data}) => {

    // const data = useStaticQuery(graphql`
    //     query flagsImageAndOfferBackground {
    //         placeholderImage: file(relativePath: { eq: "background1.jpg" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 2729, quality: 100) {

    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }

    //         flags: file(relativePath: { eq: "flags.png" }) {
    //             childImageSharp {
    //                 fluid(maxWidth: 50, quality: 100) {

    //                     ...GatsbyImageSharpFluid
    //                 }
    //             }
    //         }
    //     }
    // `)


        // const imageData = data.placeholderImage.childImageSharp.fluid
        const headerImage = data.edges[0].node.headerImage.fluid
        const headerSubtitleImage = data.edges[0].node.headerSubtitleImage.fluid
        const headerSubtitle_01 = data.edges[0].node.headerSubtitle_01
        const headerSubtitle_02 = data.edges[0].node.headerSubtitle_02
        const headerSubtitle_03 = data.edges[0].node.headerSubtitle_03
        const headerTitle = data.edges[0].node.headerTitle

    return (
        <OfferSection fluid={headerImage} id="offer" >
        {/* <BackgroundImage fluid={imageData}> */}

            <Container>
                <OfferTitle>{headerTitle}</OfferTitle>
                <OfferDescr>
                    {headerSubtitle_01} <OfferFlagsImg alt="flags" fluid={headerSubtitleImage} /> <br/> {headerSubtitle_02} <span onClick={() => scrollTo('#manifest')}>{headerSubtitle_03} <OfferUnderlineIcon/></span>
                </OfferDescr>
                

            </Container>
            <OfferSvgClip/>

            {/* <OfferBackgroundImage/> */}

         </OfferSection>




    )
}

// const StyledBackgroundSection = styled(Offer)`
//   width: 100%;
//   background-position: bottom center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   height: 600px;
// `

export default Offer


// const FlagsImage = () => {
//     const data = useStaticQuery(graphql`
//       query FlagsImage {
//         placeholderImage: file(relativePath: { eq: "flags.png" }) {
//           childImageSharp {
//             fixed(width: 125, height: 125) {
//               ...GatsbyImageSharpFixed
//             }
//           }
//         }
//       }
//     `)
  
//     return (
//         <>
//             {/* <Img fixed={data.placeholderImage.childImageSharp.fixed} /> */}
//             <div></div>
//         </>
//     )
//   }
