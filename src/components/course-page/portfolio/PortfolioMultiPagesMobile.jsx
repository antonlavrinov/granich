import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
// import Carousel from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';
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
    // const [index, setIndex] = useState(0);
    // useEffect(() => {
    //     slider.node.portfolioMedia.forEach(src => {
    //         new Promise((resolve, reject) => {
    //             const img = new Image();
    
    //             img.src = src;
    //             img.onLoad = resolve();
    //             img.onError = reject();
    //         })
    //     })
    // }, [])

    // const slideLeft = () => {
    //     const nextIndex = index - 1;
    //     if (nextIndex < 0) {
    //         setIndex(slider.node.portfolioMedia.length - 1);
    //     } else {
    //         setIndex(nextIndex)
    //     }
    // }

    // const slideRight = () => {
    //     setIndex((index + 1) % slider.node.portfolioMedia.length)
    // }
    const SliderLeft = styled(props => <SliderLeftIcon {...props}/>)`
        width: 1.8vw;
        height: 1.8vw;
        position: absolute;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);
        fill: white;
        transition: opacity 0.3s ease;
        :hover {
            opacity: 0.7;
        }
        @media only screen and (max-width: 575px) {
            width: 5vw;
            height: 5vw;
        }
    `

    const SliderRight = styled(props => <SliderRightIcon {...props}/>)`
        width: 1.8vw;
        height: 1.8vw;
        position: absolute;
        top: 50%;
        right: 45%;
        fill: white;
        transform: translate(50%, -50%);
        transition: opacity 0.3s ease;
        :hover {
            opacity: 0.7;
        }
        @media only screen and (max-width: 575px) {
            width: 5vw;
            height: 5vw;
        }
    `

    const Button = styled.button`
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


    return (
        <SliderWrapper>
            <Carousel showThumbs={false} 
                      infiniteLoop={true} 
                      showIndicators={false} 
                      showStatus={false} 
                      style={{position: 'relative'}}
                      renderArrowPrev={(onClickHandler) => {
                        return (
                            <Button type="left"
                                onClick={onClickHandler}>
                                <SliderLeftIcon />
                            </Button>
                            
                        )
                    }}
                    renderArrowNext={(onClickHandler) => {
                        return (
                            <Button
                                onClick={onClickHandler}>
                                <SliderRightIcon />
                            </Button>
                        )
                    }}
                    
                    >
                {slider.node.portfolioMedia.map((item, idx) => {
                    
                    return (
                        <SliderImage key={idx} fluid={item.fluid}/>
                    )
                })}

            </Carousel>
            {/* <div onClick={slideLeft}>left</div>
            <SliderImage fluid={slider.node.portfolioMedia[index].fluid}/>
            <div onClick={slideLeft}>left</div> */}
        </SliderWrapper>
    )
}

export default PortfolioMultiPagesMobile
