import React, {useState, useEffect} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import PortfolioImageGallery from './portfolio/PortfolioImageGallery';


const PortfolioSection = styled.section`
    margin-bottom: 4vw;
`


const PortfolioWrapper = styled.div`
    background: white;
    padding: 5vw 1.8vw;
    border-radius: 0.6vw;
    ${props => props.masterClass && `
        padding-bottom: 2vw;
    `}
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
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

const PortfolioHeaderTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
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

`

const PortfolioBonus = styled.div`
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
    span {
        color: var(--granich-black);
        font-size: inherit;
        font-weight: 500;
        display: block;
    }
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        padding: 3vw 3.3vw;
        font-size: 3.7vw;
        :first-child {
            margin-bottom: 4vw;
        }
    }
`
const PortfolioContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 2.5vw;
    @media only screen and (max-width: 575px) {
        margin-right: 0;
    }


`
const PortfolioContentInfo = styled.div`
    display: flex;
    margin-left: -0.4vw;
    @media only screen and (max-width: 575px) {
        margin-right: 0;
        justify-content: space-between;
        margin-left: 0;
        margin-bottom: 8vw;
        padding: 0 4.5vw;
    }
`

const PortfolioContentText = styled.div`
    font-size: 1.16vw;
    line-height: 1.55vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }
`

const PortfolioContentCount = styled.div`
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
    @media only screen and (max-width: 575px) {
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

`

const PortfolioOnePagersWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.8vw;
    grid-row-gap: 1.8vw;
    padding: 0 1.5vw;
    margin-bottom: 1.8vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        padding: 0;
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
        margin-bottom: 3vw;
    }

`

const PortfolioOnePager = styled(props => <BackgroundImage {...props}/>)`
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.8vw;
    grid-row-gap: 1.8vw;
    padding: 0 1.5vw 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        padding: 0;
        grid-row-gap: 3vw;
        margin-bottom: 0;
    }
`



const CoursePortfolio = ({posters, multiPages, masterClass}) => {
    const [imageGallery, setImageGallery] = useState([]);

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
    return (
        <PortfolioSection>
            <Container>
               
                <PortfolioWrapper masterClass>
                        
                            {!masterClass ? (
                                <PortfolioHeader>
                                    <PortfolioTitleAndContent>
                                        <PortfolioHeaderTitle>Вы создадите портфолио</PortfolioHeaderTitle>
                                        <PortfolioContentInfo>
                                            <PortfolioContent>
                                                <PortfolioContentCount>7</PortfolioContentCount>
                                                <PortfolioContentText>плакатов</PortfolioContentText>
                                            </PortfolioContent>
                                            <PortfolioContent>
                                                <PortfolioContentCount>2</PortfolioContentCount>
                                                <PortfolioContentText>разворота</PortfolioContentText>
                                            </PortfolioContent>
                                            <PortfolioContent>
                                                <PortfolioContentCount>1</PortfolioContentCount>
                                                <PortfolioContentText>брошюра</PortfolioContentText>
                                            </PortfolioContent>
                                        </PortfolioContentInfo>
                                    </PortfolioTitleAndContent>


                                    <PortfolioBonusBlock>
                                    <PortfolioBonus>
                                        <span>9 творческих работ</span>
                                        Это практический курс. Не просто послушали теорию и разошлись. По ходу курса вы сделаете 9 творческих работ и 1 многостраничный экзамен.
                                    </PortfolioBonus>
                                    <PortfolioBonus>
                                        <span>1 экзаменационный проект</span>
                                        Мы изучим с нуля Adobe InDesign. Поэтому на экзамене вы будете делать многостраничную публикацию. Разумеется, с уймой обратной связи.
                                    </PortfolioBonus>
                                    </PortfolioBonusBlock>
                                    </PortfolioHeader>
                            ) : (
                                <PortfolioHeader masterClass>
                                    <PortfolioTitleAndContent >

                                        <PortfolioHeaderTitle masterClass>Вы сможете создать макет</PortfolioHeaderTitle>
                                    </PortfolioTitleAndContent>
                                    
                                    <PortfolioBonusBlock>
                                        <PortfolioBonus>
                                            <span>Пакет: Макет с нуля</span>
                                            Если вы купите пакет «Макет с нуля» — вы создание макет с нуля по графсистеме VHS под руководством куратора
                                        </PortfolioBonus>
                                    </PortfolioBonusBlock>
                                    </PortfolioHeader>
                            )}
                    
                    <PortfolioOnePagersWrapper >
                        {posters.edges.map((poster, idx) => {
                            return (
                                <Zoom key={idx}>
                                    <PortfolioOnePager  fluid={poster.node.portfolioMedia[0].fluid}></PortfolioOnePager>
                                </Zoom>
                                
                            )
                        })}

                    </PortfolioOnePagersWrapper>
                    {imageGallery.length > 0 && (
                        <PortfolioMiltiPagesWrapper>
                            {imageGallery.map((multi, idx) => {
                                return (
                                    <PortfolioImageGallery key={idx} images={multi}/>
                                )
                            })}
                        </PortfolioMiltiPagesWrapper>
                    )}
                    
                    
                </PortfolioWrapper>
            </Container>
        </PortfolioSection>
    )
}

export default CoursePortfolio