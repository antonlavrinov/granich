import React, {useState} from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';



const GalleryMobileWrapper = styled.div`


`

const SliderWrapper = styled.div`

`

const SliderImage = styled(props => <Img {...props}/>)`

`



const PortfolioMultiPagesMobile = ({multiPages}) => {

    return (
        <GalleryMobileWrapper>
            {multiPages.edges.map((slider, idx) => {
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
            <div onClick={slideLeft}>left</div>
            <SliderImage fluid={slider.node.portfolioMedia[index].fluid}/>
            <div onClick={slideLeft}>left</div>
        </SliderWrapper>
    )
}

export default PortfolioMultiPagesMobile
