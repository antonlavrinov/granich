import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SliderLeftIcon from '../../../assets/svgs/graph-design/graph-design-slider-left.svg';
import SliderRightIcon from '../../../assets/svgs/graph-design/graph-design-slider-right.svg';


const GalleryMobileWrapper = styled.div`


`

const SliderWrapper = styled.div`
 margin-bottom: 3vw;
`

const SliderImage = styled(props => <Img {...props}/>)`
    width: 100%;
    height: 60vw;
`

const SliderButton = styled.button`
    position: absolute;
    top: 50%;
    right: 0.9vw;
    z-index: 4;
    transform: translateY(-50%);
    background: rgba(40,40,40,.4);
    width: 10vw;
    height: 10vw;
    border-radius: 100vw;
    svg {
        width: 5vw;
        height: 5vw;
        position: absolute;
        top: 50%;
        right: 45%;
        fill: white;
        transform: translate(50%, -50%);
        transition: opacity 0.3s ease;
    }
    :hover {
        cursor: pointer;
    }
    ${props => props.type === 'left' && `
        left: 0.9vw;
        svg {
            left: 45%;
            transform: translate(-50%, -50%);
        }
    `}

`



const PortfolioMultiPagesMobile = ({multiPages}) => {

    return (
        <GalleryMobileWrapper>
            {multiPages.edges.slice(0,5).map((slider, idx) => {
                {console.log('SLIDER', slider)}
                return (
                    <Slider key={idx} slider={slider}/>
                )
            })}

            
        </GalleryMobileWrapper>
    )
}


const Slider = ({slider}) => {





    return (
        <SliderWrapper>
            dssddssd
            <Carousel showThumbs={false} 
                      infiniteLoop={true} 
                      showIndicators={false} 
                      showStatus={false} 

                      renderArrowPrev={(onClickHandler) => {
                        return (
                            <SliderButton type="left"
                                onClick={onClickHandler}>
                                <SliderLeftIcon />
                            </SliderButton>
                            
                        )
                    }}
                    renderArrowNext={(onClickHandler) => {
                        return (
                            <SliderButton
                                onClick={onClickHandler}>
                                <SliderRightIcon />
                            </SliderButton>
                        )
                    }}
                    
                    >
                {slider.node.portfolioMedia.map((item, idx) => {
                    
                    return (
                        <SliderImage key={idx} fluid={item.fluid}/>
                    )
                })}

            </Carousel>
        </SliderWrapper>
    )
}

export default PortfolioMultiPagesMobile
