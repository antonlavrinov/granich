import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from 'gatsby-image';
import ExclamationMarkThick from '../../../assets/svgs/exclamation-mark_thick.svg';
// import TwoLines from '../../../assets/svgs/two-lines-border.svg';
import WavyLine from '../../../assets/svgs/wavy-line.svg';


const ExclamationMarkThickIcon = styled(props => <ExclamationMarkThick {...props} />)`
    width: 1.4vw;
    fill: var(--granich-black);
    position: relative;
    top: 0.22vw;
    @media only screen and (max-width: 575px) {
        width: 3.6vw;
        top: 0.6vw;
    }
`

const CourseExampleSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
const CourseExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    padding: 4vw 4vw 4vw 4.7vw;
    border-radius: 0.6vw;
    
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 6vw 6vw 6vw;

    }
`



const CourseExampleHeader = styled.div`
    display: flex;
    margin-bottom: 1.2vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 8vw;
    }
`
const CourseExampleAuthor = styled.div`
    width: 9.5vw;
    margin-right: 3.5vw;
    line-height: 1.4;
    margin-top: -0.3vw;
    @media only screen and (max-width: 575px) {
        margin-right: 0;
        min-width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 3.5vw;
    }
`

const CourseExampleAuthorImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 7.5vw;
    height: 7.5vw;
    border-radius: 100vw;
    margin-bottom: 0.5vw;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        width: 15vw;
        height: 15vw;
        width: 23vw;
        height: 23vw;
    }

`
const CourseExampleAuthorName = styled.div`
    font-size: 1.15vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 5vw;
        margin-left: 0;
        font-size: 3.7vw;
        margin-top: 1.5vw;
    }
`

const CourseExampleAuthorText = styled.div`
    font-size: 1.15vw;
    color: var(--granich-grey);
    @media only screen and (max-width: 575px) {
        font-size: 5vw;
        margin-left: 0;
        font-size: 3.7vw;
    }
`

const CourseExampleTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.4vw;
    font-size: 6vw;
    line-height: 1.04;
    position: relative;
    margin-top: 1vw;
    :after {
        content: '»';
        margin-left: 0.2vw;
        margin-top: 0.1vw;
        position: absolute;
        font-size: 5vw;

    }
    :before {
        content: '«';
        position: absolute;
        font-size: 5vw;
        top: 0.2vw;
        left: -3vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 8vw;
        margin-top: 0;
        margin-left: -4vw;
        letter-spacing: -0.1vw;
        text-align: center;
        
        :after {
            margin-left: 0.2vw;
            margin-top: 0.1vw;
            font-size: 7.4vw;
    
        }
        :before {
            position: relative;
            font-size: 5vw;
            top: 0.2vw;
            left: -0.5vw;
            font-size: 7.4vw;
        }
    }
`

const CourseExampleInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }

`


const CourseExampleInfoBlock = styled.div`
    width: 58%;
    @media only screen and (max-width: 575px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        :first-child {
            flex-direction: column-reverse;

        }
    }
`
const CourseExampleInfoText = styled.div`
    color: var(--granich-black);
    font-size: 1.3vw;
    line-height: 1.45;
    margin-left: -0.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
    }
`

const ForWhomLeft = styled.div`
    max-width: 46%;
    span {
        font-weight: 600;
        display: block;
        margin-bottom: 1.2vw;
        font-size: 1.45vw;
        line-height: 1.45;
    }
    @media only screen and (max-width: 575px) {
        max-width: 100%;
        margin-bottom: 3vw;
        span {
            font-size: 3.7vw;
            margin-bottom: 4vw;

        }
    }
`
const ForWhomTags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const ForWhomTag = styled.div`
    display: flex;
    padding: 0.5vw 1vw;
    box-shadow: 0 0.5vw 0.9vw rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100vw;
    margin-right: 1vw;
    margin-bottom: 1.5vw;
    font-size: 1.25vw;
    align-items: center;
    @media only screen and (max-width: 575px) {
        padding: 1.5vw 2.1vw;
        font-size: 3.45vw;
        margin-right: 2vw;
        margin-bottom: 3vw;
        box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.1);
    }

`

const ForWhomCheckIcon = styled(props => <Img {...props} />)`
    width: 1.1vw;
    height: 1.1vw;
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        width: 2.8vw;
        height: 2.8vw;
        margin-right: 1.5vw;
    }
`

const ForWhomRedText = styled.span`
    font-weight: 500;
    background: rgba(0,0,0,0.1);

`

const ForWhomGreenText = styled.span`
    color: green;
    display: inline-block;
    font-weight: 500;
    position: relative;
    // svg {
    //     position: absolute;
    //     bottom: -1vw;
    //     fill: green;
    //     left: 0;
    //     width: 100%;
    // }
    @media only screen and (max-width: 575px) {
        // svg {
        //     bottom: -2.8vw;
        // }
    }
`

const ForWhomWavyText = styled.span`
    color: var(--granich-red);
    font-weight: 500;
    display: inline-block;
    position: relative;
    svg {
        position: absolute;
        bottom: -1.8vw;
        fill: var(--granich-red);
        fill:red;
        left: 0;
        width: 100%;
    }
    @media only screen and (max-width: 575px) {
        svg {
            bottom: -5vw;
        }
    }
`

const tags = ['Дизайнерам', 'Фотографам', 'Иллюстраторам', 'Видеомейкерам', '3d-моделлерам']


const CourseForWhom = () => {


    const data = useStaticQuery(graphql`
        query ForWhomSectionQuery {
            forWhomAuthor: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            forWhomCheckIcon: file(relativePath: { eq: "check-icon1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 98, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const imageData = data.forWhomAuthor.childImageSharp.fluid
    const checkIcon = data.forWhomCheckIcon.childImageSharp.fluid



    return (
        <CourseExampleSection>
            <Container>
                <CourseExampleWrapper>
                    <CourseExampleHeader>
                        <CourseExampleAuthor>
                            <CourseExampleAuthorImage style={{ backgroundSize: 'cover' }} fluid={imageData} />
                            <CourseExampleAuthorName>
                                Вадим Гранич
                            </CourseExampleAuthorName>
                            <CourseExampleAuthorText>автор курса</CourseExampleAuthorText>
                        </CourseExampleAuthor>
                        <CourseExampleTitle>
                            Для кого этот курс?
                        </CourseExampleTitle>
                    </CourseExampleHeader>
                    <CourseExampleInfoWrapper>
                        <ForWhomLeft>
                            <span>Этот курс подходит визуальным специалистам:</span>
                            <ForWhomTags>
                                {tags.map((tag, idx) => (

                                    <ForWhomTag key={`${tag}-${idx}`}>
                                        <ForWhomCheckIcon fluid={checkIcon} />
                                        {tag}
                                    </ForWhomTag>

                                ))}
                            </ForWhomTags>
                        </ForWhomLeft>




                        <CourseExampleInfoBlock>
                            <CourseExampleInfoText>
                                Я создал этот курс специально для визуальных творцов. Будучи графическим дизайнером, со временем заметил серьёзную проблему — <ForWhomRedText>визуальные творцы плохо понимают бизнес <ExclamationMarkThickIcon /></ForWhomRedText> То есть, они не видят полной картины коммерческой ценности того, что создают. Из‑за этого <ForWhomWavyText>обесценивают свой труд<WavyLine /></ForWhomWavyText>. Поэтому Курс направлен на то, чтобы вы поняли, как влияете на прибыль своих клиентов и почему вы им действительно нужны. Это лейтмотив всего Осознанного Фриланса.
                                </CourseExampleInfoText>

                        </CourseExampleInfoBlock>
                    </CourseExampleInfoWrapper>


                </CourseExampleWrapper>
            </Container>
        </CourseExampleSection>
    )
}

export default CourseForWhom
