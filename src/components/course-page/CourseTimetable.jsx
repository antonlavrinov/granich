import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
// import TimetableVideo from '../../assets/images/graph-design/Timetable/ezgif.com-gif-to-mp4.mp4';
import TimetableImageGif from '../../assets/images/graph-design/commitment/commitment.gif';
import LazyLoad from 'react-lazyload';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby'


const TimetableSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
const TimetableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 3.3vw 3.3vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        padding: 6vw 6vw 7vw;
        border-radius: 2.5vw;
    }
`




const TimetableTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.2vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1;
    margin-top: -0.6vw;
    margin-bottom: 4vw;
    line-height: 1.1;
    white-space: nowrap;
    span {
        font-family: EB Garamond;
        font-style: italic;
        font-weight: 500;
        font-size: 5.4vw;
        line-height: 1;
        position: relative;
        margin-left: -0.2vw;
        white-space: normal;
        display: block;
        letter-spacing: -0.115vw;
    }


    @media only screen and (max-width: 575px) {
        span {
            white-space: normal;
            font-size: 10.4vw;
            margin-left: 0;
            letter-spacing: -0.4vw;
            margin-bottom: 6.8vw;
            line-height: 0.9;
        }
        
    }

`

const TimetableImageWrapper = styled.div`
    min-width: 48%;
    width: 48%;
    margin-right: 4%;
    height: auto;
`

const TimetableImage = styled(props => <Img {...props}/>)`
    width: 100%;

`

const TimetableInfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;

`
const TimetableInfoTextWrapper = styled.div`
    min-width: 48%;
    width: 48%;
`
const TimetableInfoText = styled.div`
    font-size: 1.55vw;
    line-height: 1.45;
    margin-bottom: 2vw;
    font-weight: 500;
`

const TimetableInfoGifBlock = styled.div`
    padding: 1.8vw 1.8vw 2.3vw;
    border-radius: 0.6vw;
    background: #2A2A2A;
    display: block;
    @media only screen and (max-width: 575px) {
        padding: 4vw 4vw 7vw;
        border-radius: 1.7vw;
    }
`


const TimetableGifWrapper = styled.div`
    min-width: 100%;
    width: 100%;
    margin-right: 3vw;
    border-radius: 0.5vw;
    // background: #f2f2f2;
    min-height: 16vw;
    height: 16vw;
    @media only screen and (max-width: 575px) {
        min-width: 100%;
        width: 100%;
        border-radius: 2vw;
        margin-bottom: 5vw;
        min-height: 44vw;
        height: 44vw;

    }
`

const TimetableGif = styled.img`
    min-width: 100%;
    width: 100%;
    margin-right: 3vw;
    border-radius: 0.5vw;
    @media only screen and (max-width: 575px) {
        min-width: 100%;
        width: 100%;
        margin-right: 3vw;
        // height: 40.8vw;
        border-radius: 2vw;
        margin-bottom: 5vw;

    }
`

const TimetableGifText = styled.div`
    color: white;
    margin-bottom: 1vw;


`

const TimetableGifTextWrapper = styled.div`
    margin-top: 2vw;
    font-size: 1.15vw;

`

const TimetableGifPS = styled.div`
    padding-left: 1vw;
    color: white;
    border-left: 2px solid var(--granich-red);
    color: var(--granich-grey);
`







const CourseTimetable = () => {

    const data = useStaticQuery(graphql`
        query timetableImage {
            imageTimetable: file(relativePath: { eq: "graph-design/timetable/timetable-image.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData = data.imageTimetable.childImageSharp.fluid

    return (
        <TimetableSection>
            <Container>
                <TimetableWrapper>
                    <TimetableTitle>Курс можно совмещать с работой <span>Но расслабиться не получится!</span></TimetableTitle>
                    <TimetableInfoWrapper>
                        <TimetableImageWrapper>
                            <TimetableImage fluid={imageData}/>
                        </TimetableImageWrapper>
                        <TimetableInfoTextWrapper>
                            <TimetableInfoText>
                                Программа обучения выстроена так, что на каждый из уроков даётся 1 неделя. С понедельника по воскресенье. В день необходимо инвестировать в своё обучение хотя бы пару часов. Уроки крайне насыщенные. При этом домашнее задание по уроку необходимо выполнить ровно за эту неделю. Это строгий дедлайн. Иначе вы будете отстранены от обучения.
                            </TimetableInfoText>
                            <TimetableInfoGifBlock>
                                <TimetableGifWrapper>
                                    {/* <LazyLoad once> */}
                                        <TimetableGif src={TimetableImageGif} alt="commitment"/>
                                        
                                </TimetableGifWrapper>
                                <TimetableGifTextWrapper>
                                    <TimetableGifText>Примерно с таким настроем нужно будет погрузиться в курс. Вы придёте сюда чтобы развивать твёрдые навыки</TimetableGifText>
                                    <TimetableGifPS>P.S. Сцена из фильма Одержимость. Философия всего курса</TimetableGifPS>
                                </TimetableGifTextWrapper>
                                
                            {/* </LazyLoad> */}
                            </TimetableInfoGifBlock>
                        </TimetableInfoTextWrapper>
                    </TimetableInfoWrapper>

                </TimetableWrapper>
            </Container>
        </TimetableSection>
    )
}

export default CourseTimetable
