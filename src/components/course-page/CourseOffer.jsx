import React, { useState } from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';
import PotokIcon from '../../assets/svgs/graph-design/graph-design-potok-icon.svg';
// import DurationIcon from '../../assets/svgs/graph-design/graph-design-duration-icon.svg';
import DateIcon from '../../assets/svgs/graph-design/graph-design-date-icon.svg';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useSprings, animated, to as interpolate } from 'react-spring';
import { useDrag } from 'react-use-gesture'
import { Link } from 'gatsby';
import { useMediaQuery } from 'react-responsive'



const Potok = styled(props => <PotokIcon {...props} />)`
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

// const Duration = styled(props => <DurationIcon {...props}/>)`
//     width: 1.3vw;
//     height: 1.3vw;
//     fill: var(--granich-red);
//     margin-right: 0.3vw;
//     @media only screen and (max-width: 575px) {
//         width: 4.3vw;
//         height: 4vw;
//         margin-right: 1vw;
//         margin-top: -0.8vw;
//     }
// `
const Date = styled(props => <DateIcon {...props} />)`
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
    margin-bottom: 2vw;
    position: relative; 
    @media only screen and (max-width: 575px) {
        margin-bottom: 3vw;
        margin-top: -1vw;
        padding-bottom: 2vw;
        padding-top: 1vw;
        overflow: hidden;
    }


`

// const CourseOfferOverflow = styled.div`
//     overflow: hidden;
// `



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


    display: flex;
    flex-direction: column;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        overflow: visible;
        background: white;
        border-radius: 2.5vw;
        padding: 7vw 1vw 6vw;
        box-shadow: 0 0 1.8vw rgba(0,0,0,0.15);
    }




`



const CourseOfferMainImage = styled(props => <Img {...props} />)`
    position: absolute !important;
    width: 100% !important;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    user-select: none;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        position: relative !important;
        width: 100% !important;
    }
`

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
            font-size: 14vw;
            letter-spacing: 0.5vw;
            i { 
                letter-spacing: -0.2vw;
                font-size: 15vw;
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

const CourseOfferButton = styled(props => <Link {...props} />)`
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


const OfferRootWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 12vw;
    width: 30vw;
    height: 36vw;
    height: 100%;
    z-index: 998;

    
    @media only screen and (max-width: 575px) {
        width: 100%;
        right: 0;

        
    }
`

const OfferCardItemWrapper = styled(animated.div)`
    position: absolute;
    width: 100%;
    height: 100%;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
`

const OfferCardItem = styled(animated.div)`
    background-color: white;
    background-size: auto 95%;
    background-repeat: no-repeat;
    background-position: center center;
    width: 22.4vw;
    max-width: 22.4vw;
    height: 31vw;
    max-height: 31vw;
    will-change: transform;
    border-radius: 0.2vw;
    box-shadow: 0 0vw 1vw rgba(0,0,0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;


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

const CourseCircle = styled.div`
    width: 25vw;
    height: 25vw;
    background: #f2f2f2;
    border-radius: 100vw;
    position: absolute;
    right: 4vw;
    top: 50%;
    transform: translateY(-50%);
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

const CourseCircleMobile = styled.div`
    display: none;
    @media only screen and (max-width: 575px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70vw;
        height: 70vw;
        display: block;
        background: #f2f2f2;
        border-radius: 100vw;
        z-index: 1;
    }
`

const OfferPoster = styled(props => <Img {...props} />)`
    user-select: none;
    width: 95%; 
    div {
        user-select: none;
    }
`

const CourseMobileSpinner = styled.div`
    display: none;
    @media only screen and (max-width: 575px) {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70vw;
        height: 70vw;
        display: block;
        background: #f2f2f2;
        border-radius: 100vw;
        z-index: 1;
    }
`

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = i => ({ x: 0, y: i * 0, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 1500, rot: 0, scale: 1, y: 0 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `  rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck({ postersCollection }) {
    const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
    const [props, set] = useSprings(postersCollection.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
    // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
    const bind = useDrag(({ args: [index], down, movement: [mx], distance, direction: [xDir], velocity }) => {
        const trigger = velocity > 0.1 // If you flick hard enough it should trigger the card to fly out default: 0.2
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
        if (!down && gone.size === postersCollection.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
    })
    // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
    return props.map(({ x, y, rot, scale }, i) => (
        <OfferCardItemWrapper className="spring-div-wrapper noselect" key={i} style={{ x, y }}>
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <OfferCardItem className="spring-div-inside noselect" {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }} >
                <OfferPoster draggable={false} className="noselect" fluid={postersCollection[i].fluid} />
            </OfferCardItem>
        </OfferCardItemWrapper>
    ))
}





const CourseOffer = ({ data, courseName, deckVisibility, allowDeck }) => {



    const isMobile = useMediaQuery({
        query: '(max-width: 575px)'
    })
    const isDesktop = useMediaQuery({
        query: '(min-width: 575px)'
    })


    return (
        <CourseOfferSection>
            {/* <CourseOfferOverflow> */}
            {deckVisibility && isDesktop && (
                <OfferRootWrapper>
                    <Deck postersCollection={data.coursePostersCollection} />
                </OfferRootWrapper>
            )}

            <Container>
                <CourseOfferWrapper type={data.courseType}>
                    <CourseOfferInfo>
                        <CourseOfferTags className="noselect">
                            {data.courseType === 'Курс' ? (
                                <>
                                    {data.courseStream && <CourseOfferMainTag><Potok />{data.courseStream} поток</CourseOfferMainTag>}
                                    {data.courseStartAndEnd && <CourseOfferTag><Date />{data.courseStartAndEnd}</CourseOfferTag>}
                                    {data.courseTags.map((tag, idx) => {
                                        return (
                                            <CourseOfferTag key={idx}>{tag}</CourseOfferTag>
                                        )
                                    })}

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


                        {(data.courseType === 'Мастер-класс' || !allowDeck) && (
                            <CourseOfferMainImage imgStyle={{ objectFit: 'contain', objectPosition: 'right center' }} fluid={data.courseMainImage.fluid} />
                        )}

                        {data.courseType === 'Курс' && allowDeck && (
                            <>
                                <CourseCircle></CourseCircle>

                                <CourseOfferPlaceholder>
                                    <CourseCircleMobile></CourseCircleMobile>
                                    <CourseMobileSpinner style={{ display: `${deckVisibility ? "none" : "block"}` }}>

                                        <div className="loadingio-spinner-rolling-ta5f1nqy5p">
                                            <div className="ldio-6b142d04hhl">
                                                <div></div>
                                            </div>
                                        </div>
                                    </CourseMobileSpinner>


                                    {isMobile && (
                                        <>
                                            <OfferRootWrapper>
                                                <Deck postersCollection={data.coursePostersCollection} />
                                            </OfferRootWrapper>
                                        </>

                                    )}

                                </CourseOfferPlaceholder>
                            </>

                        )}



                        <CourseOfferDescr className="noselect" courseName={courseName} type={data.courseType}>
                            {data.courseDescr}
                        </CourseOfferDescr>
                        {data.courseType === 'Курс' ? (
                            <CourseOfferButton to='#participation-section'><CourseArrowDown />Участвовать</CourseOfferButton>
                        ) : (
                                <CourseOfferButton to='#prices-range-section' type={data.courseType}>Купить<CourseArrowDown /></CourseOfferButton>
                            )}
                    </CourseOfferInfo>

                </CourseOfferWrapper>


            </Container>

            {/* </CourseOfferOverflow> */}




        </CourseOfferSection>
    )
}

export default CourseOffer

// {data.courseType === 'Курс' ? (
//     <CourseOfferButton onClick={() => scrollTo('#participation-section')}><CourseArrowDown/>Участвовать</CourseOfferButton>
// ) : (
//     <CourseOfferButton onClick={() => scrollTo('#prices-range-section')}  type={data.courseType}>Купить<CourseArrowDown/></CourseOfferButton>
// )}
