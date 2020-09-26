import React, {useState} from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import CourseArrowDown from '../../assets/svgs/course-arrow-down-27.svg';
import PotokIcon from '../../assets/svgs/graph-design/graph-design-potok-icon.svg';
import DurationIcon from '../../assets/svgs/graph-design/graph-design-duration-icon.svg';
import DateIcon from '../../assets/svgs/graph-design/graph-design-date-icon.svg';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
// import { useSprings, animated, interpolate } from 'react-spring'
// import { useGesture } from 'react-use-gesture'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'


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
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }


`

const CourseOfferWrapper = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    background: white;
    border-radius: 0.6vw;
    padding: 2.5vw 2.7vw 4.4vw;
    position: relative;
    box-shadow: 0.25vw 0.15vw 0.4vw rgba(0,0,0,0.1);
    background-size: auto auto;
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: right;
    overflow: hidden;
    display: flex;
    @media only screen and (max-width: 575px) {
        display: none;
    }



`

const CourseOfferWrapperMobile = styled.section`
    display: none;
    @media only screen and (max-width: 575px) {
        display: block;
        background: white;
        border-radius: 2.5vw;
        padding: 7vw 1vw 6vw;
        box-shadow: 0 0 1.8vw rgba(0,0,0,0.15);
    }
`

const CourseOfferMainImage = styled(props => <Img {...props} />)`
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const CourseOfferTags = styled.div`
    display: flex;
    margin-bottom: 2.1vw; 
    align-items: flex-start;
    flex-wrap: wrap;
    @media only screen and (max-width: 575px) {
        padding: 0 3.5vw;
    }
`
const CourseOfferTag = styled.div`
    font-size: 1.2vw;
    display: flex;
    color: var(--granich-red);
    border: 1.5px solid var(--granich-red);
    padding: 0.3vw 0.8vw;
    border-radius: 100vw;
    margin-right: 1vw;
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
    margin-right: 1vw;
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
    margin-bottom: 4.25vw;
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
        margin-bottom: 5vw;
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
`
const CourseOfferDescr = styled.div`
    width: 33vw;
    font-size: 1.55vw;
    margin-bottom: 2vw;
    margin-left: 0.8vw;
    line-height: 1.47;
    font-weight: 500;
    letter-spacing: -0.01vw;
    ${props => props.type === 'Мастер-класс' && `
        width: 26vw;
        margin-bottom: 2vw;
        @media only screen and (max-width: 575px) {
            font-size: 4.4vw;
            margin-bottom: 4vw;
            
        }
    `}
    @media only screen and (max-width: 575px) {
        width: 95%;
        font-size: 5vw;
        padding: 0 5vw;
        margin-bottom: 5vw;
        margin-left: 0;
    }

`

const CourseOfferButton = styled.a`
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

const CoursePortfolioDeck = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

// const OfferCardItemWrapper = styled(animated.div)`
//     position: absolute;
//     top: 0;
//     left: 0;
//     z-index: 100;
//     width: 30vw;
//     height: 30vw;
//     will-change: transform;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

// const OfferCardItem = styled(animated.div)`
//     background-color: white;
//     background-size: auto 85%;
//     background-repeat: no-repeat;
//     background-position: center center;
//     width: 20vw;
//     // max-width: 300px;
//     height: 20vw;
//     // max-height: 570px;
//     will-change: transform;
//     border-radius: 10px;
//     box-shadow: 0 12.5px 100px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
// `

// const cards = [
//     'https://upload.wikimedia.org/wikipedia/en/f/f5/RWS_Tarot_08_Strength.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/5/53/RWS_Tarot_16_Tower.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/9/9b/RWS_Tarot_07_Chariot.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/d/db/RWS_Tarot_06_Lovers.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/690px-RWS_Tarot_02_High_Priestess.jpg',
//     'https://upload.wikimedia.org/wikipedia/en/d/de/RWS_Tarot_01_Magician.jpg'
//   ]

// // These two are just helpers, they curate spring data, values that are later being interpolated into css
// const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
// const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// // This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

// const Deck = () => {
//   const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
//   const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) })) // Create a bunch of springs using the helpers above
//   // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
//   const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
//     const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
//     const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
//     if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
//     set(i => {
//       if (index !== i) return // We're only interested in changing spring-data for the current spring
//       const isGone = gone.has(index)
//       const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
//       const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
//       const scale = down ? 1.1 : 1 // Active cards lift up a bit
//       return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
//     })
//     if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
//   })
//   // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
//   return props.map(({ x, y, rot, scale }, i) => (
//     <OfferCardItemWrapper key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
//       {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
//       <OfferCardItem {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
//     </OfferCardItemWrapper>
//   ))
// }


const CourseOffer = ({data}) => {
    return (
        <CourseOfferSection>
            <Container>
                <CourseOfferWrapper fluid={data.courseMainImage.fluid}>
                    <CourseOfferInfo>
                        <CourseOfferTags>
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
                        <CourseOfferTitle type={data.courseType}>
                            {documentToReactComponents(data.courseMainTitle.json)}
                        </CourseOfferTitle>
                        <CourseOfferDescr type={data.courseType}>
                            {data.courseDescr}
                        </CourseOfferDescr>
                        {data.courseType === 'Курс' ? (
                            <CourseOfferButton onClick={() => scrollTo('#participation-section')}><CourseArrowDown/>Участвовать</CourseOfferButton>
                        ) : (
                            <CourseOfferButton onClick={() => scrollTo('#prices-range-section')}  type={data.courseType}>Купить<CourseArrowDown/></CourseOfferButton>
                        )}
                    </CourseOfferInfo>
                    <div onClick={() => {
                        trackCustomEvent({
                            // string - required - The object that was interacted with (e.g.video)
                            category: "Special Button",
                            // string - required - Type of interaction (e.g. 'play')
                            action: "Click",
                            // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
                            label: "Gatsby Plugin Example Campaign",
                            // number - optional - Numeric value associated with the event. (e.g. A product ID)
                            value: 43
                          })
                    }}>cutom event</div>
                    {/* <CoursePortfolioDeck>
                        <Deck/>
                    </CoursePortfolioDeck> */}
                    


                    
                </CourseOfferWrapper>
                <CourseOfferWrapperMobile>
                    <CourseOfferTags>
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
                    <CourseOfferTitle type={data.courseType}>
                        {documentToReactComponents(data.courseMainTitle.json)}
                    </CourseOfferTitle>
                    <CourseOfferMainImage fluid={data.courseMainImage.fluid}/>
                    <img alt="offer-image" src="|"/>
                    <CourseOfferDescr type={data.courseType}>
                        {data.courseDescr}
                    </CourseOfferDescr>
                    {data.courseType === 'Курс' ? (
                        <CourseOfferButton onClick={() => scrollTo('#participation-section')}><CourseArrowDown/>Участвовать</CourseOfferButton>
                    ) : (
                         <CourseOfferButton onClick={() => scrollTo('#prices-range-section')}  type={data.courseType}>Купить<CourseArrowDown/></CourseOfferButton>
                    )}
                </CourseOfferWrapperMobile>
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
