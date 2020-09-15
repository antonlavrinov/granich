import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ExampleArrowIcon from '../../assets/svgs/graph-design/graph-design-example-arrow.svg';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import LongArrowMobileIcon from '../../assets/svgs/graph-design/graph-design-long-arrow-mobile.svg';

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
    padding: 4vw 4.7vw;
    border-radius: 0.6vw;
    
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        padding: 6vw 6vw 6vw;

    }
`

const ExampleArrow = styled(props => <ExampleArrowIcon {...props}/>)`
    width: 13vw;
    height: 2.2vw;
    margin: 0 auto;
    margin-top: 2vw;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

const LongArrowMobile = styled(props => <LongArrowMobileIcon {...props}/>)`
    display: none; 
    @media only screen and (max-width: 575px) {
        display: block;
        height: 140vw !important;
        fill: var(--granich-black);
        margin-bottom: 9vw;
    }
`

const CourseExampleHeader = styled.div`
    display: flex;
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 5vw;
    }
`
const CourseExampleAuthor = styled.div`
    width: 15vw;
    margin-right: 5vw;
    line-height: 1.4;
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
    width: 7.1vw;
    height: 7.1vw;
    border-radius: 100vw;
    margin-bottom: 0.3vw;
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
    margin-left: -0.1vw;
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
    margin-left: -0.1vw;
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
    font-size: 5.2vw;
    // width: 600px;
    line-height: 1.04;
    position: relative;
    // margin-bottom: 50px;
    // margin-left: 15px;
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
        left: -3.5vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 7.4vw;
        margin-top: 0;
        margin-left:0;
        letter-spacing: -0.1vw;
        text-align: center;
        :after {
            margin-left: 0.2vw;
            margin-top: 0.1vw;
            font-size: 7.4vw;
    
        }
        :before {
            font-size: 5vw;
            top: 0.2vw;
            left: 0;
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
const CourseExampleImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 100%;
    height: 11.25vw;
    margin-bottom: 0;
    background-size: cover;
    background-size: auto 100% ;
    @media only screen and (max-width: 575px) {
        height: 29.5vw;
    }
`

const CourseExampleInfoBlock = styled.div`
    width: 50%;
    @media only screen and (max-width: 575px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        position: relative;
        :first-child {
            flex-direction: column-reverse;
            // margin-bottom: 50vw;

        }
    }
`
const CourseExampleInfoText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    line-height: 1.45;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        :first-child {
            margin-bottom: 12vw;
        }

    }
`

const CourseExampleImageLine = styled.div`
    width: 1.5px;
    background: #d4d4d4;
    margin: 0 3vw;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`



const CourseExample = () => {

    const data = useStaticQuery(graphql`
        query ExampleSectionQuery {
            author: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            example1: file(relativePath: { eq: "graph-design/example/example-01.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            example2: file(relativePath: { eq: "graph-design/example/example-02.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData = data.author.childImageSharp.fluid

    return (
        <CourseExampleSection>
            <Container>
                <CourseExampleWrapper>
                    <CourseExampleHeader>
                        <CourseExampleAuthor>
                            <CourseExampleAuthorImage style={{backgroundSize: 'cover'}} fluid={imageData}/>
                            <CourseExampleAuthorName>
                                Вадим Гранич
                            </CourseExampleAuthorName>
                            <CourseExampleAuthorText>автор курса</CourseExampleAuthorText>
                        </CourseExampleAuthor>
                        <CourseExampleTitle>
                            На курсе мы разложим знания по полочкам
                        </CourseExampleTitle>
                    </CourseExampleHeader>
                    <CourseExampleInfoWrapper>
                        <CourseExampleInfoBlock>
                                <CourseExampleImage fluid={data.example1.childImageSharp.fluid}/>
                                <CourseExampleInfoText>
                                    Вы кое-что слышали о шрифтах. Знакомы с цветом. Пользовались jpeg. Возможно, даже делали свои макеты. Но упорядочены ли ваши знания? Неважно, начинаете вы с нуля или у вас уже есть какой-то опыт — знания требуют структурности.
                                </CourseExampleInfoText>
                                
                        </CourseExampleInfoBlock>
                        <LongArrowMobile/>
                        <CourseExampleImageLine/>
                        
                        <CourseExampleInfoBlock>
                                <CourseExampleImage fluid={data.example2.childImageSharp.fluid}/>
                                <CourseExampleInfoText>
                                    После курса вы сможете уверенно аргументировать свои решения. Будете понимать как работает графический дизайн. Ваши знания станут упорядочены, чтобы быстро достать с нужной полки необходимое.
                                </CourseExampleInfoText>

                        </CourseExampleInfoBlock>
                    </CourseExampleInfoWrapper>
                    <ExampleArrow/>
                    
                </CourseExampleWrapper>
            </Container>
        </CourseExampleSection>
    )
}

export default CourseExample
