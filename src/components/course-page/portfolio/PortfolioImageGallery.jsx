import React, {useState} from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss"
import BackgroundImage from 'gatsby-background-image';
import FullscreenOutIcon from '../../../assets/svgs/graph-design/graph-design-fullscreen-out.svg';
import FullscreenInIcon from '../../../assets/svgs/graph-design/graph-design-fullscreen-in.svg';
import SliderLeftIcon from '../../../assets/svgs/graph-design/graph-design-slider-left.svg';
import SliderRightIcon from '../../../assets/svgs/graph-design/graph-design-slider-right.svg';
import styled from 'styled-components';


const FullscreenOut = styled(props => <FullscreenOutIcon {...props}/>)`
    width: 1.8vw;
    height: 1.8vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s ease;
    :hover {
        opacity: 0.7;
    }
    @media only screen and (max-width: 575px) {
        width: 5vw;
        height: 5vw;
    }
`

const FullscreenIn = styled(props => <FullscreenInIcon {...props}/>)`
    width: 1.8vw;
    height: 1.8vw;
    transition: opacity 0.3s ease;
    :hover {
        opacity: 0.7;
    }
    @media only screen and (max-width: 575px) {
        width: 5vw;
        height: 5vw;
    }
`

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

const Slider = styled(props => <BackgroundImage {...props}/>)`

` 
    // :focus {
    //     border: none;
    //     outline: none;
    // }
    // :active {
    //     border: none;
    //     outline: none;
    // }
    // @media only screen and (max-width: 575px) {
    //     height: 62vw;

    // }
    



const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        className='image-gallery-custom-left-nav'
        disabled={disabled}
        onClick={onClick}>
            <SliderLeft/>
        </button>
    )

}

const renderRightNav = (onClick, disabled) => {
    return (
      <button
        className='image-gallery-custom-right-nav'
        disabled={disabled}
        onClick={onClick}>
            <SliderRight/>
        </button>
    )
  }


const renderFullscreenButton = (onClick, isFullscreen) => {
    return (
      <button
        type='button'
        className={
          `image-gallery-fullscreen-button${isFullscreen ? ' active' : ''}`}
        onClick={onClick}
      >{isFullscreen ? <FullscreenIn/> : <FullscreenOut/>}</button>
    );
  }




const PortfolioImageGallery = ({images}) => {
    const [fullscreen, setFullscreen] = useState(false)

    const _renderItem = (item, isFullscreen) => {
        return (
          <Slider className="gallery-custom-slider" style={{width: '100%', backgroundSize: `${fullscreen ? 'contain' : "100%"}`}} fluid={item.fluid}></Slider>
        )
        }
    

    return (
        <>
            <ImageGallery 
                        slideDuration={450} 
                        renderItem={_renderItem} 
                        showPlayButton={false} 
                        renderLeftNav={renderLeftNav}  
                        renderRightNav={renderRightNav}
                        showThumbnails={fullscreen}  
                        onScreenChange={(boolean) => setFullscreen(boolean)} 
                        useBrowserFullscreen={false} 
                        items={images} 
                        renderFullscreenButton={renderFullscreenButton}
                        
            />
            <style>
                {`.customThumbnail {
                    // width: 12vh;
                }
                .image-gallery-thumbnails {
                    // padding: 1.5vh;
                }
                .image-gallery-thumbnail {
                    transition: none;
                    // border: 0.2vw solid rgba(0,0,0,0);
                    // box-sizing: content-box;
                    
                }
                .image-gallery-thumbnail:hover {
                    border-color: var(--granich-red);
                    // box-sizing: content-box;
                    
                }

                .image-gallery-thumbnail:active {
                    border-color: rgba(0,0,0,0);
                    // box-sizing: content-box;
                }
                .image-gallery-thumbnail:focus {
                    border-color: rgba(0,0,0,0);
                    // box-sizing: content-box;
                }
                .image-gallery-thumbnail.active, .image-gallery-thumbnail:hover {
                    border-color: var(--granich-red);
                    // box-sizing: content-box;
                    cursor: pointer;
                }
                

                .image-gallery-thumbnail-image {
                    object-fit: cover;
                    height: 70px;
                }
                .image-gallery-slide {
                    height: 15vw;
                    height: 100%;
                }
                .image-gallery-image {
                    object-fit: cover;
                    max-height: auto;
                }
                .image-gallery-custom-left-nav {
                    position: absolute;
                    top: 50%;
                    left: 0.9vw;
                    z-index: 4;
                    transform: translateY(-50%);
                    background: rgba(40,40,40,.4);
                    width: 4vw;
                    height: 4vw;
                    border-radius: 100vw;
                    padding: 0;
                }
                .image-gallery-custom-left-nav:hover {
                    cursor: pointer;
                }
                .image-gallery-custom-right-nav {
                    position: absolute;
                    top: 50%;
                    right: 0.9vw;
                    z-index: 4;
                    transform: translateY(-50%);
                    background: rgba(40,40,40,.4);
                    width: 4vw;
                    height: 4vw;
                    border-radius: 100vw;
                }
                .image-gallery-custom-right-nav:hover {
                    cursor: pointer;
                }
                .image-gallery-fullscreen-button {
                    opacity: 0;
                    transition: opacity 0.3s ease;
                    border-radius: 100vw;
                    width: 4vw;
                    height: 4vw;
                    position: absolute;
                    top: 0.9vw;
                    right: 0.9vw;
                    background: rgba(40,40,40,.4);
                    padding: 0;

                }
                .image-gallery-fullscreen-button:hover {
                    cursor: pointer;
                }

                .image-gallery-slide-wrapper:hover > .image-gallery-fullscreen-button {
                    opacity: 1;
                }
                .image-gallery-fullscreen-button.active {
                    position: fixed;
                    top: 1vw;
                    right: 1vw;
                    width: 4vw;
                    height: 4vw;
                    opacity: 1;

                }
                .image-gallery.fullscreen-modal {
                    z-index: 9999;
                }
                .gallery-custom-slider {
                    height: 15.5vw;
                }

                @media only screen and (max-width: 575px) {
                    .image-gallery-fullscreen-button {
                        width: 12vw;
                        height: 12vw;
                        top: 3vw;
                        right: 3vw;
                        opacity: 1;
    
                    }
                    .image-gallery-custom-right-nav {
                        width: 12vw;
                        height: 12vw;
                        right: 3vw;
                    }
                    .image-gallery-custom-left-nav {
                        width: 12vw;
                        height: 12vw;
                        left: 3vw;
                    }
                    .image-gallery-fullscreen-button.active {
                        width: 12vw;
                        height: 12vw;
                        top: 3vw;
                        right: 3vw;
                    }
                    .gallery-custom-slider {
                        height: 60vw;
                    }
                    .image-gallery-thumbnail-image {
                        object-fit: cover;
                        height: 45px;
                    }
                    .customThumbnail {
                        width: 68px;
                    }
                    
                    
                    
                }

                ${fullscreen && `
                    .gallery-custom-slider {
                        height: calc(100vh - 88px) !important;
    
                    }

                    .image-gallery-slide {
                        height: auto !important;
                    }
                    .image-gallery-image {
                        object-fit: cover;
                        
                    }

                    .image-gallery-custom-left-nav {
                        position: fixed;
                        width: 4vw;
                        height: 4vw;
                        left: 1vw;

                    }
                    .image-gallery-custom-left-nav svg{
                        width: 1.5vw;
                        height: 1.5vw;
                    }
                    .image-gallery-custom-right-nav {
                        position: fixed;
                        width: 4vw;
                        height: 4vw;
                        right: 1vw;
                    }
                    .image-gallery-custom-right-nav svg{
                        width: 1.5vw;
                        height: 1.5vw;
                    }
                    @media only screen and (max-width: 575px) {
                        .image-gallery-custom-left-nav svg{
                            width: 5vw;
                            height: 5vw;
                        }
                        .image-gallery-custom-right-nav svg{
                            width: 5vw;
                            height: 5vw;
                        }
                        .gallery-custom-slider {
                            height: calc(100vh - 55px) !important;

                        }
                    }
                `}
                
                `
                
                }
            </style>
        </>
    )
}

export default PortfolioImageGallery
