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
    padding: 12em 0 10em;
    max-height: 900px;


`

const OfferTitle = styled.h1`
    font-family: Inter, sans-serif;
    font-weight: 700;
    font-size: 88px;
    color: white;
    line-height: 0.88;
    letter-spacing: -.06em;
    width: 500px;
    width: 70%;
    margin-bottom: 4.5%;
    margin-left: -0.17em;
`
const OfferDescr = styled.div`
    margin-left: -0.05em;
    color: white;
    letter-spacing: .015em;
    font-size: 33.5px;
    line-height: 0.9;
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
    width: 280px;
    position: absolute;
    bottom: -18px;
    left: 5px;
    // left: 1.8em;

    
`

const OfferSvgClip = styled(props => <BackgroundClip {...props}/>)`
    position: absolute;
    bottom: 0;
    z-index: 0;
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
                    fixed(width: 28, height: 28, quality: 100) {

                        ...GatsbyImageSharpFixed
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
            backgroundPosition: 'center',
            // backgroundSize: '140%'
            }}>
        {/* <BackgroundImage fluid={imageData}> */}

            <Container>
                <OfferTitle>Онлайн-школа Granich</OfferTitle>
                <OfferDescr>
                    Онлайн-курсы <Img alt="flags" fixed={data.flags.childImageSharp.fixed} /> <br/> с <span onClick={() => scrollTo('#manifest')}>осознанным подходом <OfferUnderlineIcon/></span>
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
