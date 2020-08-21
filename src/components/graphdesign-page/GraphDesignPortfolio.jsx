import React, {useState} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import SwiperCore, { Navigation, Pagination, Thumbs, Controller } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Modal from 'react-modal';
SwiperCore.use([Navigation, Pagination, Thumbs, Controller]);
// import "../../styles/slick.css";
// import "../../styles/owl.carousel.min.css";
// import Loadable from '@loadable/component';

// import OwlCarousel from 'react-owl-carousel';

// const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const PortfolioSection = styled.section`
    margin-bottom: 50px;
`


const PortfolioWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const CarouselSlide = styled.div`
    width: 10vw;
    height: 10vw;
    background: lightgrey;

`

const Slide = styled.div`
    background: lightgrey;
    height: 10vw;
    :hover {
        cursor: pointer;
    }
`

Modal.setAppElement(`#___gatsby`);

const GraphDesignPortfolio = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [slides, setSlides] = useState([{name: 1}, {name: 2}, {name: 3}, {name: 4}])
    const [firstControlledSwiper, setFirstControlledSwiper] = useState(null);
    const [secondControlledSwiper, setSecondControlledSwiper] = useState(null);
    const [modalIsOpen,setIsOpen] = React.useState(true);
    const slidesss = slides.map((slide, idx) => {
        return (
            <SwiperSlide key={idx} tag="li"><Slide>{slide}</Slide></SwiperSlide>
        )
    })

    console.log(slidesss)
    return (
        <PortfolioSection>
            <Container>
                {/* <Modal isOpen={modalIsOpen}
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0, 0, 0, 0.58)",
                              },
                            content: {
                            position: "relative",
                            top: "auto",
                            left: "auto",
                            right: "auto",
                            bottom: "auto",
                            margin: "32px auto",
                            padding: 0,
                            border: 0,
                            },
                        }}>
                    dfsdfsdfs
                </Modal> */}
                <Swiper
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
                </Swiper>
                {/* <PortfolioWrapper>
                    <button onClick={() => this.refs.car.prev()}>prev</button>
                    <button onClick={() => this.refs.car.next()}>next</button>

                    <OwlCarousel ref="car" {...options} className="owl-theme" loop>
                        <div><img src='http://placekitten.com/g/400/200'/></div>
                        <div><img src='http://placekitten.com/g/400/200'/></div>
                        <div><img src='http://placekitten.com/g/400/200'/></div>
                        <div><img src='http://placekitten.com/g/400/200'/></div>
                        <div><img src='http://placekitten.com/g/400/200'/></div>
                        <div><img src='http://placekitten.com/g/400/200'/></div>
                    </OwlCarousel>
                </PortfolioWrapper> */}
            </Container>
        </PortfolioSection>
    )
}

export default GraphDesignPortfolio


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
