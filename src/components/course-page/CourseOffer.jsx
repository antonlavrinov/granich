import React, {useEffect, useState} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';
import PotokIcon from '../../assets/svgs/graph-design/graph-design-potok-icon.svg';
import DurationIcon from '../../assets/svgs/graph-design/graph-design-duration-icon.svg';
import DateIcon from '../../assets/svgs/graph-design/graph-design-date-icon.svg';
import Img from 'gatsby-image';
// import scrollTo from 'gatsby-plugin-smoothscroll';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { useSprings, animated, to as interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture'
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive'



const Potok = styled(props => <PotokIcon {...props}/>)`
    width: 1.3vw;
    height: 1.3vw;
    margin-right: 0.3vw;
    fill: white;
    @media only screen and (max-width: 575px) {
        width: 4.3vw;
        height: 4vw;
        margin-right: 1vw;
        margin-top: -0.3vw;
    }
`

const Duration = styled(props => <DurationIcon {...props}/>)`
    width: 1.3vw;
    height: 1.3vw;
    fill: var(--granich-red);
    margin-right: 0.3vw;
    @media only screen and (max-width: 575px) {
        width: 4.3vw;
        height: 4vw;
        margin-right: 1vw;
        margin-top: -0.8vw;
    }
`
const Date = styled(props => <DateIcon {...props}/>)`
    width: 1.3vw;
    height: 1.3vw;
    fill: var(--granich-red);
    margin-right: 0.3vw;
    @media only screen and (max-width: 575px) {
        width: 4.3vw;
        height: 4vw;
        margin-right: 1vw;
        margin-top: -0.8vw;
    }
`

const CourseOfferSection = styled.section`
    margin-bottom: 4vw;
    position: relative;
    overflow-x: hidden;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }


`

const CourseOfferWrapper = styled.div`
    background: white;
    border-radius: 0.6vw;
    padding: 2.5vw 2.7vw 3vw;
    position: relative;
    box-shadow: 0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);
    background-size: auto auto;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 575px) {
        background: white;
        border-radius: 2.5vw;
        padding: 7vw 1vw 6vw;
        box-shadow: 0 0 1.8vw rgba(0,0,0,0.15);
    }



`



// const CourseOfferMainImage = styled(props => <Img {...props} />)`
//     position: absolute !important;
//     width: 100% !important;
//     top: 0;
//     right: 0;
//     bottom: 0;
//     z-index: 0;
//     user-select: none;
//     @media only screen and (max-width: 575px) {
//         margin-bottom: 5vw;
//         position: relative !important;
//         width: 100% !important;
//     }
// `

const CourseOfferTags = styled.div`
    display: flex;
    margin-bottom: 2.1vw; 
    align-items: flex-start;
    flex-wrap: wrap;
    position: relative;
    max-width: 65%;
    z-index: 1;
    @media only screen and (max-width: 575px) {
        padding: 0 3.5vw;
        max-width: 100%;
    }
`
const CourseOfferTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 0.5vw;
    margin-bottom: 1vw;
    font-weight: 500;
    align-items: center;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding: 1.8vw 2.5vw 1.6vw;
        margin-right: 3vw;
        white-space: nowrap;
        margin-bottom: 3vw;
        line-height: 1;
    }
`
const CourseOfferMainTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: white;
    background: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 0.5vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        padding: 1.6vw 2.5vw;
        margin-right: 3vw;
        white-space: nowrap;
        margin-bottom: 3vw;
    }
`

const CourseOfferTitle = styled.h1`
    line-height: 0.8;
    margin-left: -0.3vw;
    margin: 0;
    margin-bottom: 4vw;
    position: relative;
    z-index: 1;
    p {
        font-size: 7.5vw;
        letter-spacing: 0.28vw;
        font-family: EB Garamond;
        style: normal;
        font-weight: 500;
        i {
            display: block;
            letter-spacing: -0.05vw;
            line-height: inherit;
            font-style: italic;
            font-size: 7.2vw;
            font-weight: inherit;
            font-family: EB Garamond;
        }
    }
    

    @media only screen and (max-width: 575px) {
        margin-bottom: 7vw;
        margin-left: 0vw;
        margin-top: -1vw;
        line-height: 0.8;
        padding: 0 5vw;
        p {
            font-size: 15vw;
            letter-spacing: 0.5vw;
            i { 
                letter-spacing: -0.2vw;
                font-size: 14vw;
                margin-top: 2vw;
            }
        }
    }
    ${props => props.type === 'Мастер-класс' && `
        margin-bottom: 1.5vw;
        margin-left: 0vw;
        margin-top: -1vw;
        line-height: 1.15;
        p {
            font-size: 6vw;
            font-weight: 500;
            letter-spacing: 0.8vw;
            i { 
                margin-top: 2vw;
                font-weight: 500;
                display: block;
            }
        }
        @media only screen and (max-width: 575px) {
            line-height: 1.15;
            padding: 0 5vw;
            p {
                font-size: 11vw;
                letter-spacing: 0.8vw;
                i { 
                    letter-spacing: -0.2vw;
                    font-size: 14vw;
                    margin-top: 2vw;
                }
            }
        }
    `}
    ${props => props.courseName === 'Swiss' && `
        p {
            letter-spacing: 0 !important;
            font-size: 7vw;
            line-height: 1.05;

        }
        @media only screen and (max-width: 575px) {
            p {
                font-size: 15vw;
            }
        }
        

    `}
`
const CourseOfferDescr = styled.div`
    width: 35vw;
    font-size: 1.55vw;
    margin-bottom: 1.5vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    font-weight: 500;
    letter-spacing: -0.01vw;
    position: relative;
    z-index: 1;
    @media only screen and (max-width: 575px) {
        width: 95%;
        font-size: 4.6vw;
        padding: 0 5vw;
        margin-bottom: 5vw;
        margin-left: 0;
    }
    ${props => props.type === 'Мастер-класс' && `
        width: 25vw;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            margin-bottom: 4vw;
            width: 100%;
            
        }
    `}

    ${props => props.courseName === 'Swiss' && `
        width: 30vw;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            margin-bottom: 4vw;
            
        }
    `}


`

const CourseOfferButton = styled(props => <Link {...props}/>)`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: 0.7vw;
  padding: 1vw 1.6vw 1.2vw 1.3vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.61vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: .25vw .25vw .4vw rgba(0,0,0,0.25);
  letter-spacing: 0.05vw;
  position: relative;
  z-index: 1;
  margin-bottom: 1vw;
  svg {
    width: 1.4vw;
    height: 1.4vw;
    margin-right: 0.5vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.61vw;
    font-weight: 400;
    letter-spacing: 0.06vw;
  }
  ${props => props.type === 'Мастер-класс' && `
    padding: 1vw 3vw 1.2vw 4.2vw;
    
    svg {
        margin-left: 0.4vw;
        
    }
    @media only screen and (max-width: 575px) {
        padding: 3vw 11vw 4vw 14vw;
        :hover {
            font-size: 5.5vw;
          }
        svg {
            margin-left: 1vw;
            margin-right: 0;
        }

    }
  `}
  @media only screen and (max-width: 575px) {
    font-size: 5.5vw;
    margin: 0 5vw;
    padding: 3vw 5vw 4vw 5vw;
    border-radius: 1.5vw;
    margin-bottom: 2vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0,0,0,0.3);
    :hover {
        font-size: 5.5vw;
    }
    svg {
        width: 5vw;
        height: 5vw;
        margin-left: 0;
        margin-right: 1vw;
    }
  }

`

const CourseOfferInfo = styled.div`


`

const CourseOfferPlaceholder = styled.div`
    position: absolute !important;
    height: 100%;
    width: 30vw;
    top: 0;
    right: 0;
    z-index: 0;
    user-select: none;
    display: none;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        position: relative !important;
        width: 100% !important;
        height: 85vw;
        display: block;

    }
`

// const CoursePortfolioDeck = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
// `

// const OfferBodyWrapper = styled.div`
//     // overscroll-behavior-y: contain;
//     // margin: 0;
//     // padding: 0;
//     // height: 40vw;
//     // width: 40vw;
//     user-select: none;
//     font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial,
//     sans-serif;
//     // position: fixed;
//     // top: 0;
//     // left: 0;
//     z-index: 999;
//     // overflow-x: hidden;
// `

const OfferRootWrapper = styled.div`
    // background: lightblue;
    position: absolute;
    top: 0;
    right: 12vw;
    width: 30vw;
    height: 36vw;
    height: 100%;
    z-index: 998;
    
    @media only screen and (max-width: 575px) {
        // background: lightblue;
        width: 100%;
        right: 0;

        
    }
`

const OfferCardItemWrapper = styled(animated.div)`
    position: absolute;
    // z-index: 999;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: black;
`

const OfferCardItem = styled(animated.div)`
    background-color: white;
    background-size: auto 95%;
    // background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 22.4vw;
    max-width: 22.4vw;
    // max-width: 300px;
    height: 31vw;
    max-height: 31vw;
    // max-height: 570px;
    will-change: transform;
    border-radius: 0.2vw;
    box-shadow: 0 0vw 1vw rgba(0,0,0, 0.2);


    :hover {
        cursor: pointer;
    }
    @media only screen and (max-width: 575px) {
        width: 55vw;
        max-width: 55vw;
        height: 76vw;
        max-height: 76vw;
    }

    `

// const OfferSpinnerWrapper = styled.div`
//     position: absolute;
//     top: 0;
//     right: 0;
//     width: 30vw;
//     height: 100%;
//     z-index: 998;
//     div {
//         width: 2vw;
//         height: 2vw;
//     }
//     @media only screen and (max-width: 575px) {
//         display: none;
//     }
// `

// const cards = [
//     'https://images.ctfassets.net/yej6fivg4hs3/pIvg0ZEfRESddackniI8L/6781774ceebb33dd28a8dfbc719e6a62/17-7-_________________________________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/9hIxeRwQTb3zbc7Fk2v2x/d5d5d41710b83e1827c702de31d11664/17-6-____________-______________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/9hIxeRwQTb3zbc7Fk2v2x/d5d5d41710b83e1827c702de31d11664/17-6-____________-______________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/7kYzs8i27RTKDkRmk70dCE/a7fe074445b9c18ef13dcf8ff2d33388/16-5-__________-____________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/pIvg0ZEfRESddackniI8L/6781774ceebb33dd28a8dfbc719e6a62/17-7-_________________________________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/3CtHnBkVBQKsJu2P4iUBgP/9dd612463632a1928100f8f174c4a062/16-8-__________-________________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/pIvg0ZEfRESddackniI8L/6781774ceebb33dd28a8dfbc719e6a62/17-7-_________________________________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/9hIxeRwQTb3zbc7Fk2v2x/d5d5d41710b83e1827c702de31d11664/17-6-____________-______________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/9hIxeRwQTb3zbc7Fk2v2x/d5d5d41710b83e1827c702de31d11664/17-6-____________-______________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/7kYzs8i27RTKDkRmk70dCE/a7fe074445b9c18ef13dcf8ff2d33388/16-5-__________-____________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/pIvg0ZEfRESddackniI8L/6781774ceebb33dd28a8dfbc719e6a62/17-7-_________________________________-____.jpg?h=250',
//     'https://images.ctfassets.net/yej6fivg4hs3/3CtHnBkVBQKsJu2P4iUBgP/9dd612463632a1928100f8f174c4a062/16-8-__________-________________-____.jpg?h=250',


//   ]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * 0, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 1500, rot: 0, scale: 1, y: 0 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `  rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck({postersCollectionUrls}) {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, set] = useSprings(postersCollectionUrls.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    set(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === postersCollectionUrls.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return props.map(({ x, y, rot, scale }, i) => (
    <OfferCardItemWrapper className="spring-div-wrapper noselect" key={i} style={{ x, y }}>
      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
      <OfferCardItem className="spring-div-inside noselect" {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(https:${postersCollectionUrls[i]})` }} />
    </OfferCardItemWrapper>
  ))
}





const CourseOffer = ({data, courseName, deckVisibility}) => {
    const [postersCollectionUrls, setPostersCollectionUrls ] = useState([])
    useEffect(() => {
        let cardsArray = [];
        data.coursePostersCollection.forEach((poster) => {
            cardsArray.push(poster.resize.src)
        })
        setPostersCollectionUrls(cardsArray)
    }, [])

    const isMobile = useMediaQuery({
        query: '(max-width: 575px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 575px)'
    })


    return (
        <CourseOfferSection>
                {deckVisibility && isDesktop && (
                    <OfferRootWrapper>
                        <Deck postersCollectionUrls={postersCollectionUrls}/>
                    </OfferRootWrapper>
                )}
                
                <Container>
                    <CourseOfferWrapper>
                        <CourseOfferInfo>
                        <CourseOfferTags className="noselect">
                            {data.courseType === 'Курс' ? (
                                <>
                                    {data.courseStream && <CourseOfferMainTag><Potok/>{data.courseStream} поток</CourseOfferMainTag>}
                                    {data.courseStart && <CourseOfferTag><Date/>Старт {data.courseStart}</CourseOfferTag>}
                                    {data.courseDuration && <CourseOfferTag><Duration/>{data.courseDuration} интенсива</CourseOfferTag>}
                                </>
                            ) : (
                                <>
                                    {data.courseTags.map((tag, idx) => {
                                        return (
                                            <CourseOfferTag key={idx}>{tag}</CourseOfferTag>
                                        )
                                    })}
                                </>
                            )}
                        </CourseOfferTags>
                        <CourseOfferTitle className="noselect" courseName={courseName} type={data.courseType}>
                            {documentToReactComponents(data.courseMainTitle.json)}
                        </CourseOfferTitle>

                        
                        
                        {/* <CourseOfferMainImage imgStyle={{ objectFit: 'contain', objectPosition: 'right center' }} fluid={data.courseMainImage.fluid}/> */}
                        <CourseOfferPlaceholder>
                            {isMobile && (
                                <>
                                {!deckVisibility && (
                                     <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                                        <div className="ldio-6b142d04hhl">
                                            <div></div>
                                        </div>
                                    </div>
                                )}
                                   
                                {deckVisibility && (
                                    <OfferRootWrapper>
                                        <Deck postersCollectionUrls={postersCollectionUrls}/>
                                    </OfferRootWrapper>
                                )}
                                    
                                    
                                </>
                          
                            )}
                            
                        </CourseOfferPlaceholder>

                        {/* {!deckVisibility && isDesktop && (
                            <OfferSpinnerWrapper>
                                <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                                    <div className="ldio-6b142d04hhl">
                                        <div></div>
                                    </div>
                                </div>
                            </OfferSpinnerWrapper>
                           
                        )} */}

                        
                        <CourseOfferDescr className="noselect" courseName={courseName} type={data.courseType}>
                            {data.courseDescr}
                        </CourseOfferDescr>
                        {data.courseType === 'Курс' ? (
                            <CourseOfferButton to='#participation-section'><CourseArrowDown/>Участвовать</CourseOfferButton>
                        ) : (
                            <CourseOfferButton to='#prices-range-section'  type={data.courseType}>Купить<CourseArrowDown/></CourseOfferButton>
                        )}
                        </CourseOfferInfo>
                        
                    </CourseOfferWrapper>
               
              
            </Container>

            
            

        </CourseOfferSection>
    )
}

export default CourseOffer

// {data.courseType === 'Курс' ? (
//     <CourseOfferButton onClick={() => scrollTo('#participation-section')}><CourseArrowDown/>Участвовать</CourseOfferButton>
// ) : (
//     <CourseOfferButton onClick={() => scrollTo('#prices-range-section')}  type={data.courseType}>Купить<CourseArrowDown/></CourseOfferButton>
// )}
