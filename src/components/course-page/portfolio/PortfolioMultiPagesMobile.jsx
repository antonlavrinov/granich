import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';


const GalleryMobileWrapper = styled.div`


`

const SliderWrapper = styled.div`

`

const SliderImage = styled(props => <Img {...props}/>)`
    height: 45vw;
    width: 100%;
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
    const [index, setIndex] = useState(0);
    useEffect(() => {
        slider.node.portfolioMedia.forEach(src => {
            new Promise((resolve, reject) => {
                const img = new Image();
    
                img.src = src;
                img.onLoad = resolve();
                img.onError = reject();
            })
        })
    }, [])

    const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
            setIndex(slider.node.portfolioMedia.length - 1);
        } else {
            setIndex(nextIndex)
        }
    }

    const slideRight = () => {
        setIndex((index + 1) % slider.node.portfolioMedia.length)
    }

    return (
        <SliderWrapper>
            <Carousel arrows>
                {slider.node.portfolioMedia.map((item, idx) => {
                    console.log(item)
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
