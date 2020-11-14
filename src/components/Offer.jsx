import React from 'react'
import styled from 'styled-components';
import { Container } from './style';
import BackgroundClip from '../assets/svgs/background-clip-01.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import UnderlineLinkIcon from '../assets/svgs/offer-underline-link.svg';
import Img from 'gatsby-image';






const OfferSection = styled.div`
    position: relative;
    width: 100%;
    height: 43.5vw;
    background-color: var(--granich-black);
    @media only screen and (max-width: 575px) {
        height: 134vw;
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

// const OfferSeo = styled.h2`
//     font-size: 1.15vw;
//     color: #f2f2f2;
//     user-select: none;
//     z-index: 10;
//     position: relative;
//     z-index: 0;
// `

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

const OfferMainImage = styled(props => <Img {...props} />)`
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100% !important;
    user-select: none;
    @media only screen and (max-width: 575px) {
        display: none;
    }


`

const OfferMainImageMobile = styled(props => <Img {...props} />)`
    position: absolute !important;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100% !important;
    display: none;
    height: 100% !important;
    user-select: none;
    @media only screen and (max-width: 575px) {
        display: block;
    }


`

const OfferWrapper = styled.div`
    padding: 12.2vw 0 5vw 0;
    position: relative;
    top: 0;
    left: 0;
    z-index: 1;
    @media only screen and (max-width: 575px) {
        padding: 28vw 6vw;  
    }



`






const Offer = ({data}) => {



        const headerImage = data.edges[0].node.headerImage.fluid
        const headerImageMobile = data.edges[0].node.headerImageMobile.fluid       
        const headerSubtitleImage = data.edges[0].node.headerSubtitleImage.fluid
        const headerSubtitle_01 = data.edges[0].node.headerSubtitle_01
        const headerSubtitle_02 = data.edges[0].node.headerSubtitle_02
        const headerSubtitle_03 = data.edges[0].node.headerSubtitle_03
        const headerTitle = data.edges[0].node.headerTitle

    return (
        <>
            <OfferSection id="offer" >
                <OfferMainImage fluid={headerImage}/>
                <OfferMainImageMobile fluid={headerImageMobile}/>
                <Container>
                    
                    <OfferWrapper>
                        <OfferTitle>{headerTitle}</OfferTitle>
                        <OfferDescr>
                            {headerSubtitle_01} <OfferFlagsImg alt="flags" fluid={headerSubtitleImage} /> <br/> {headerSubtitle_02} <span tabIndex={0} role="button" onKeyDown={() => scrollTo('#manifest')} onClick={() => scrollTo('#manifest')}>{headerSubtitle_03} <OfferUnderlineIcon/></span>
                        </OfferDescr>

                        
                        {/* <OfferSeo>Делаем из любви, а не страха. Курсы с осознанным подходом. Выточенно. Интенсивно. С дедлайнами.</OfferSeo> */}
                    </OfferWrapper>
                    

                </Container>

            </OfferSection>
            <OfferSvgClip/>

        </>





    )
}


export default Offer


