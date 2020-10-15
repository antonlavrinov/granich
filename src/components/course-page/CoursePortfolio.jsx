import React, {useState, useEffect} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import PortfolioImageGallery from './portfolio/PortfolioImageGallery';
import PortfolioMultiPagesMobile from './portfolio/PortfolioMultiPagesMobile';

import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types'
import { useMediaQuery } from 'react-responsive'
import { graphql, useStaticQuery } from 'gatsby'

const PortfolioSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`


const PortfolioWrapper = styled.div`
    background: white;
    padding: 5vw 1.8vw;
    border-radius: 0.6vw;
    ${props => props.masterClass && `
        padding-bottom: 2vw;
    `}
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 8vw 6vw;
    }
`

const PortfolioHeader = styled.div`
    display: flex;
    margin-bottom: 5vw;
    padding: 0 1.5vw;
    ${props => props.masterClass && `
        margin-bottom: 4vw;
    `}
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        padding: 0;
        flex-direction: column;
        margin-bottom: 6.5vw;
    }
`

const PortfolioHeaderTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.1vw;
    font-weight: 700;
    line-height: 0.87;
    margin-top: -0.6vw;
    margin-bottom: 4.5vw;


    ${props => props.masterClass && `
        margin-bottom: 0;

    `}
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 10vw;
    }
    
`

const PortfolioTitleAndContent = styled.div`
    min-width: 35.5vw;
    @media only screen and (max-width: 575px) {
        min-width: auto;
    }

` 

const PortfolioBonusBlock = styled.div`
    p {
        background: #f2f2f2;
        border-radius: 0.5vw;
        padding: 1.4vw 1.6vw;
        font-size: 1.15vw;
        line-height: 1.3;
        color: var(--granich-light-grey);
        margin-bottom: 1.3vw;
        :last-child {
            margin-bottom: 0;
        }
        b {
            color: var(--granich-black);
            font-size: inherit;
            font-weight: 500;
            display: block;
        }
    }
    a {
        border-bottom: 1px solid var(--granich-light-grey);
        :hover {
            border-color: var(--granich-grey);
        }
    }
    @media only screen and (max-width: 575px) {
        P {
            border-radius: 1.5vw;
            padding: 3vw 3.3vw;
            font-size: 3.7vw;
            :first-child {
                margin-bottom: 4vw;
            }
        }

    }
`



const PortfolioContentInfo = styled.div`
    display: flex;
    margin-left: -0.4vw;
    p {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-right: 2.5vw;
        font-size: 1.16vw;
        line-height: 1.55vw;
        font-weight: 500;

    }
    i {
        font-family: EB Garamond;
        font-style: italic;
        font-size: 5.4vw;
        font-weight: 500;
        align-text: center;
        background: #e2e2e2;
        border-radius: 100vw;
        height: 4.7vw;
        width: 4.7vw;
        min-height: 4.7vw;
        min-width: 4.7vw;
        line-height: 0.8;
        letter-spacing: -0.4vw;
        padding-left: 0.8vw;
        margin-bottom: 0.6vw;
    }
    b {
        display: flex;
        align-items: center;
        flex-direction: column;
        line-height: 1.55vw;
        font-weight: 500;
        i {
            color: var(--granich-black);
            background: rgba(228,5,33,0.15);
        }
    }

    @media only screen and (max-width: 575px) {
        margin-right: 0;
        justify-content: space-between;
        margin-left: 0;
        margin-bottom: 8vw;
        padding: 0 4.5vw;
        p {
            margin-right: 0;
            font-size: 3.7vw;
        }
        i {
            height: 14.5vw;
            width: 14.5vw;
            min-height: 14.5vw;
            min-width: 14.5vw;
            font-size: 17vw;
            line-height: 0.8;
            padding-left: 3.2vw;
            margin-bottom: 3.3vw;
            background: #f2f2f2;
        }
    }
`


const PortfolioOnePagersWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    grid-column-gap: 1.8vw;
    grid-row-gap: 1.8vw;
    padding: 0 1.5vw;
    margin-bottom: 2vw;
    margin-top: 1.8vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        padding: 0;
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
        margin-bottom: 5vw;
    }

`

const PortfolioOnePager = styled(props => <Img {...props}/>)`
    height: 22.7vw;
    width: 100%;
    transition: transform 0.2s ease;
    :hover {
        transform: scale(1.05);
    }
    @media only screen and (max-width: 575px) {
        height: 53vw;
    }
`

const PortfolioMiltiPagesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.6vw 1.5vw;
    margin-top: 0.5vw;
    // min-height: 55.1vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 0;

    }
`


const PortfolioLinks = styled.div`
    display: flex;
    margin-top: 1.8vw;
    justify-content: center;
    @media only screen and (max-width: 575px) {
        margin-top: 5vw;
        flex-direction: column;
        align-items: center;
    }
`

const PortfolioLink = styled.a`
    background: #f2f2f2;
    border-radius: 0.5vw;
    padding: 1.3vw;
    display: flex;
    margin: 0 0.5vw;
    align-items: center;
    transition: transform 0.2s ease;

    :hover {
        cursor: pointer;
        transform: scale(1.03)
    }
    @media only screen and (max-width: 575px) {
        margin: 0;
        margin-bottom: 2.5vw;
        border-radius: 1.5vw;
        padding: 3.5vw;
        display: inline-flex;
        width: 80%;
        :last-child {
            margin-bottom: 0;
        }
        :hover {
            transform: none
        }
    }
`

const PortfolioLinkText = styled.div`
    font-size: 1.25vw;
    line-height: 1.2;
    width: 14vw;
    color: var(--granich-grey);
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        width: auto;
    }
`
const PortfolioLinkIcon = styled(props => <Img {...props}/>)`
    min-width: 3.3vw;
    min-height: 3.3vw;
    width: 3.3vw;
    height: 3.3vw;
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 9vw;
        min-height: 9vw;
        width: 9vw;
        height: 9vw;
        margin-right: 1.3vw;
    }
`

const PortfolioSubtitle = styled.div`
    padding-left: 1.5vw;
    font-size: 1.55vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding-left: 0;
        margin-bottom: 3vw;
    }

`

const options = {
    renderNode: {
        [INLINES.HYPERLINK]: (node) => {
        return <a href={node.data.uri} rel="noopener noreferrer" target='_blank' >{node.content[0].value}</a>;
        }
    },   
}




const CoursePortfolio = ({posters, multiPages, masterClass, dataHeader}) => {
    const [imageGallery, setImageGallery] = useState([]);
    const isMobile = useMediaQuery({
        query: '(max-width: 575px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 575px)'
    })

    useEffect(() => {
        if(multiPages) {
            const galleriesArray = [];
            multiPages.edges.forEach((gallery) => {
                const slidesArray = [];
                gallery.node.portfolioMedia.forEach((slide) => {
                    const schema = {
                        original: slide.resize.src,
                        thumbnail: slide.resize.src,
                        thumbnailClass: 'customThumbnail',
                        originalClass: 'customSlider',
                        fluid: slide.fluid
                    }
                    slidesArray.push(schema)
                })
                galleriesArray.push(slidesArray)
            })

            setImageGallery(galleriesArray)
        }
        return;

    }, [multiPages])


    const dataIcons = useStaticQuery(graphql`
        query portfolioExternalLinkIcons {
            pinterest: file(relativePath: { eq: "pinterest-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            behance: file(relativePath: { eq: "behance-icon.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const pinterestIcon = dataIcons.pinterest.childImageSharp.fluid;
    const behanceIcon = dataIcons.behance.childImageSharp.fluid;

    return (
        <PortfolioSection>
            <Container>
               
                <PortfolioWrapper masterClass>
                        
                            {!masterClass ? (
                                <PortfolioHeader>
                                    <PortfolioTitleAndContent>
                                        <PortfolioHeaderTitle>{dataHeader.portfolioHeaderTitle}</PortfolioHeaderTitle>
                                        {dataHeader.childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode && (
                                            <PortfolioContentInfo>
                                                {documentToReactComponents(dataHeader.childContentfulGranichCoursePortfolioHeaderPortfolioHeaderSummaryRichTextNode.json)}
                                            </PortfolioContentInfo>
                                        )}

                                    </PortfolioTitleAndContent>


                                    <PortfolioBonusBlock>
                                        {documentToReactComponents(dataHeader.portfolioHeaderInfo.json, options)}
                                    </PortfolioBonusBlock>
                                    </PortfolioHeader>
                            ) : (
                                <PortfolioHeader masterClass>
                                    <PortfolioTitleAndContent >

                                        <PortfolioHeaderTitle masterClass>{dataHeader.portfolioHeaderTitle}</PortfolioHeaderTitle>
                                    </PortfolioTitleAndContent>
                                    
                                    <PortfolioBonusBlock>
                                        {documentToReactComponents(dataHeader.portfolioHeaderInfo.json, options)}
                                    </PortfolioBonusBlock>
                                    </PortfolioHeader>
                            )}
                    <PortfolioSubtitle>Одностраничные макеты:</PortfolioSubtitle>
                    <PortfolioOnePagersWrapper >
                        
                        {posters.edges.map((poster, idx) => {
                            return (
                                <Zoom key={idx}>
                                    <PortfolioOnePager  fluid={poster.node.portfolioMedia[0].fluid}></PortfolioOnePager>
                                </Zoom>
                                
                            )
                        })}

                    </PortfolioOnePagersWrapper>
                    {!masterClass && <PortfolioSubtitle>Многостраничные макеты:</PortfolioSubtitle>}
                    
                    {isDesktop && !masterClass && (
                        <>
                            
                            {imageGallery.length > 0 && (
                                <PortfolioMiltiPagesWrapper>
                                    
                                        {imageGallery.map((multi, idx) => {
                                            return (
                                                
                                                <PortfolioImageGallery key={idx} images={multi}/>
                                            )
                                        })}
                                    
                                
                                </PortfolioMiltiPagesWrapper>
                            )}
                        </>
                    )}
                    {!masterClass && isMobile && (
                        <>
                            <PortfolioMultiPagesMobile multiPages={multiPages}/>
                        </>


                    )}
                    <PortfolioLinks>
                        <PortfolioLink rel="noopener noreferrer" target="_blank" href="https://www.pinterest.ru/vadim_granich/granich-graphic-design-course/">
                            <PortfolioLinkIcon fluid={pinterestIcon}/>
                            <PortfolioLinkText>Больше плакатов учеников на Pinterest</PortfolioLinkText>
                        </PortfolioLink>
                        {!masterClass && (
                            <PortfolioLink rel="noopener noreferrer" target="_blank" href="https://www.behance.net/granich">
                                <PortfolioLinkIcon fluid={behanceIcon}/>
                                <PortfolioLinkText>Больше журналов учеников на Behance</PortfolioLinkText>
                            </PortfolioLink>
                        )}

                    </PortfolioLinks>



                    

                    
                    
                </PortfolioWrapper>
            </Container>
        </PortfolioSection>
    )
}

export default CoursePortfolio