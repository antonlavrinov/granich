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
    height: 46vw;


`

const OfferTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 6.9vw;
    color: white;
    line-height: 0.88;
    letter-spacing: -.4vw;
    width: 60vw;
    margin-bottom: 2.5vw;
    margin-left: -1.1vw;
`
const OfferDescr = styled.div`
    margin-left: -.3vw;
    color: white;
    letter-spacing: .01vw;
    font-size: 2.35vw;
    line-height: 1;
    font-family: Cormorant Garamond;
    position: relative;
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
`

const OfferUnderlineIcon = styled(props => <UnderlineLinkIcon {...props}/>)`
    width: 20.8vw;
    position: absolute;
    bottom: -1.1vw;
    left: 0.4vw;
    // left: 1.8em;

    
`

const OfferSvgClip = styled(props => <BackgroundClip {...props}/>)`
    position: absolute;
    bottom: 0;
    z-index: 0;
`

const OfferFlagsImg = styled(props => <Img {...props} />)`
    margin-left: 1vw;
    top: 0.2vw;
    width: 2vw;
    display: inline-block;
` 





const Offer = () => {

    const data = useStaticQuery(graphql`
        query flagsImageAndOfferBackground {
            placeholderImage: file(relativePath: { eq: "background1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2729, quality: 100) {

                        ...GatsbyImageSharpFluid
                    }
                }
            }

            flags: file(relativePath: { eq: "flags.png" }) {
                childImageSharp {
                    fluid(maxWidth: 50, quality: 100) {

                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

        console.log('data', data)
        const imageData = data.placeholderImage.childImageSharp.fluid
        console.log('data', imageData)
    return (
        <OfferSection fluid={imageData} id="offer" style={{
            // background: `url('${background}')`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundAttachment: 'fixed',
            backgroundPosition: 'top',
            backgroundSize: '112%'
            }}>
        {/* <BackgroundImage fluid={imageData}> */}

            <Container>
                <OfferTitle>Онлайн-школа Granich</OfferTitle>
                <OfferDescr>
                    Онлайн-курсы <OfferFlagsImg alt="flags" fluid={data.flags.childImageSharp.fluid} /> <br/> с <span onClick={() => scrollTo('#manifest')}>осознанным подходом <OfferUnderlineIcon/></span>
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
