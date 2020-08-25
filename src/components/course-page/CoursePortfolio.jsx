import React, {useState} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Modal from 'react-modal';
import BackgroundImage from 'gatsby-background-image';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);

const PortfolioSection = styled.section`
    margin-bottom: 50px;
`


const PortfolioWrapper = styled.div`
    background: white;
    padding: 5vw 1.8vw;
    border-radius: 0.5vw;
`

const PortfolioHeader = styled.div`
    display: flex;
    margin-bottom: 5vw;
    padding: 0 1.5vw;
`

const PortfolioHeaderTitle = styled.div`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.87;
    margin-top: -0.6vw;
    margin-bottom: 4.5vw;

    @media only screen and (max-width: 575px) {
        font-size: 11.9vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-right: 0;
        margin-bottom: 4vw;
    }
    
`

const PortfolioTitleAndContent = styled.div`
    min-width: 35.5vw;
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
`
const PortfolioContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 2.5vw;
    // justify-content: center;

`
const PortfolioContentInfo = styled.div`
    display: flex;
    margin-left: -0.4vw;
`

const PortfolioContentText = styled.div`
    font-size: 1.16vw;
    // width: 9vw;
    line-height: 1.55vw;
    font-weight: 500;
`

const PortfolioContentCount = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-size: 5.4vw;
    font-weight: 500;
    // position: relative;
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

`

const PortfolioOnePagersWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1.8vw;
    grid-row-gap: 1.8vw;
    padding: 0 1.5vw;

`

const PortfolioOnePager = styled(props => <BackgroundImage {...props}/>)`
    height: 24.5vw;
    min-height: 24.5vw;
    width: 100%;
    transition: transform 0.2s ease;
    :hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`

const PortfolioMiltiPagesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
`

const PortfolioMultiPager = styled.div`
    width: 10vw;
    height: 10vw;
    background: grey;
`

const PortfolioMultiPagerWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // min-width: 50vw;

`

const PortfolioMultiPagerSlide = styled(props => <BackgroundImage {...props}/>)`
        // min-height: 10vw;
        height: 100%;
        width: 100%;
        // min-width: 10vw;
`

const CarouselSlide = styled.div`
    width: 10vw;
    height: 10vw;
    background: lightgrey;

`

const Slide = styled(props => <BackgroundImage {...props}/>)`
    height: 10vw;
    background: lightgrey;
    :hover {
        cursor: pointer;
    }
`

Modal.setAppElement(`#___gatsby`);

const CoursePortfolio = ({posters, multiPages}) => {
    // const [thumbsSwiper, setThumbsSwiper] = useState(null);

    console.log('multi', multiPages)
    return (
        <PortfolioSection>
            <Container>
                {/* <Modal isOpen={modalIsOpen}
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0, 0, 0, 0.58)",
                                zIndex: 1000
                              },
                            content: {
                            position: "fixed",
                            top: "0",
                            left: "0",
                            right: "0",
                            bottom: "0",
                            margin: "10vw 10vw",
                            padding: "5vw",
                            border: 0,
                            zIndex: 1000
                            },
                        }}>
                    dfsdfsdfs
                    <button onClick={() => setIsOpen(false)}>close</button>
                    <PortfolioMiltiPagesWrapper>

                    
                    <PortfolioMultiPager>
                        <PortfolioMultiPagerWrapper>
                            <Swiper 
                                id="course-slider-main"
                                // thumbs={{swiper: thumbsSwiper}}
                                controller={{control: firstControlledSwiper}}
                                tag="div"
                                style={{width: '20vw', height: '20vw'}}
                                wrapperTag="ul"
                                slidesPerView={1}
                                navigation
                                // onSwiper={setSecondControlledSwiper}
                                onSlideChange={() => console.log('slide change')}
                                
                                >
                                    {multiPages.edges[indexOfSlider].node.portfolioMedia.map((page, idxx) => {
                                        console.log(page)
                                        return (
                                            <SwiperSlide key={idxx}>
                                                <PortfolioMultiPagerSlide fluid={page.fluid}></PortfolioMultiPagerSlide>
                                            </SwiperSlide>
                                        )
                                    })}
                            </Swiper>
                        </PortfolioMultiPagerWrapper>

                                    

                    </PortfolioMultiPager>
                    </PortfolioMiltiPagesWrapper>
                </Modal> */}
                {/* <Swiper
                    id="course-slider-main"
                    thumbs={{swiper: thumbsSwiper}}
                    controller={{control: secondControlledSwiper}}
                    tag="div"
                    wrapperTag="ul"
                    slidesPerView={1}
                    navigation
                    onSwiper={setFirstControlledSwiper}
                    onSlideChange={() => console.log('slide change')}
                    >
                        {slides.map((i, el) => {
                            return <SwiperSlide key={el}>Slide {i.name}</SwiperSlide>;
                        })}



                </Swiper>
                <Swiper id="course-slider-thumbs" tag="div" wrapperTag="ul" slidesPerView={3} navigation onSwiper={setThumbsSwiper}>
                    {slides.map((i, el) => {
                        return <SwiperSlide key={el}>Slide {i.name}</SwiperSlide>;
                    })}

                </Swiper>
                <Swiper id="controller" 
                        onSwiper={setSecondControlledSwiper}
                        tag="div"
                        controller={{control: firstControlledSwiper}}
                        wrapperTag="ul"
                        navigation
                        >
                    {slides.map((i, el) => {
                        return <SwiperSlide key={el}>Slide {i.name}</SwiperSlide>;
                    })}
                </Swiper> */}
                <PortfolioWrapper>
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
                    <PortfolioOnePagersWrapper>
                        {posters.edges.map((poster, idx) => {
                            return (
                                <Zoom key={idx}>
                                    <PortfolioOnePager  fluid={poster.node.portfolioMedia[0].fluid}></PortfolioOnePager>
                                </Zoom>
                                
                            )
                        })}

                    </PortfolioOnePagersWrapper>
                    {/* <PortfolioMiltiPagesWrapper>
                        {multiPages.edges.map((multi, idx) => {
                            return (
                                <PortfolioMultiPager key={idx} onClick={() => {setIndexOfSlider(idx);console.log(idx); setIsOpen(true)}}>
                                    <PortfolioMultiPagerWrapper>
                                    <Swiper
                                        id="course-slider-main"
                                        thumbs={{swiper: thumbsSwiper}}
                                        // controller={{control: secondControlledSwiper}}
                                        tag="div"
                                        style={{width: '20vw', height: '20vw'}}
                                        wrapperTag="ul"
                                        slidesPerView={1}
                                        navigation
                                        onSwiper={setFirstControlledSwiper}
                                        onSlideChange={() => console.log('slide change')}
                                        
                                        >
                                            {multi.node.portfolioMedia.map((page, idxx) => {
                                                console.log(page)
                                                return (
                                                    <SwiperSlide key={idxx}>
                                                        <PortfolioMultiPagerSlide fluid={page.fluid}></PortfolioMultiPagerSlide>
                                                    </SwiperSlide>
                                                )
                                            })}
                                    </Swiper>
                                    </PortfolioMultiPagerWrapper>
                                </PortfolioMultiPager>

                            )
                        })}
                    </PortfolioMiltiPagesWrapper> */}
                </PortfolioWrapper>
            </Container>
        </PortfolioSection>
    )
}

export default CoursePortfolio


                {/* <Carousel style={{height: '20vw'}} wrapAround={true}
                        transitionMode="scroll"
                        speed={1500}
                        slidesToShow={1}
                        slideIndex={slideIndex}
                        afterSlide={slideIndex => setSlideIndex(slideIndex)}
                        renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>Previous</button>
                )}
                            renderCenterRightControls={({ nextSlide }) => (
                                <button onClick={nextSlide}>Next</button>
                            )}
                >

                </Carousel> */}
