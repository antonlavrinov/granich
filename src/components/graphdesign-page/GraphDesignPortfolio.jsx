import React, {useState} from 'react'
import { Container } from '../style';
import styled from 'styled-components';

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



const GraphDesignPortfolio = () => {


    return (
        <PortfolioSection>
            <Container>
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
