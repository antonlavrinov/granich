import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ExampleArrow from '../../assets/svgs/graph-design/graph-design-example-arrow.svg';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const CourseExampleSection = styled.section`
    margin-bottom: 5vw;
`
const CourseExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    padding: 4vw 4.7vw;
    border-radius: 0.5vw;
    
    svg {
        width: 13vw;
        height: 2.2vw;
        margin: 0 auto;
        margin-top: 2vw;
    }
`

const CourseExampleHeader = styled.div`
    display: flex;
`
const CourseExampleAuthor = styled.div`
    width: 15vw;
    margin-right: 5vw;
    line-height: 1.4;
`

const CourseExampleAuthorImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 7.1vw;
    height: 7.1vw;
    border-radius: 100vw;
    margin-bottom: 0.3vw;
    overflow: hidden;

`
const CourseExampleAuthorName = styled.div`
    font-size: 1.15vw;
    margin-left: -0.1vw;
    font-weight: 500;
`

const CourseExampleAuthorText = styled.div`
    font-size: 1.15vw;
    color: var(--granich-grey);
    margin-left: -0.1vw;
`

const CourseExampleTitle = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.2vw;
    // width: 600px;
    line-height: 1.04;
    position: relative;
    margin-bottom: 50px;
    margin-left: 15px;
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
`

const CourseExampleInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`
const CourseExampleImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 100%;
    height: 11.25vw;
    margin-bottom: 0;
    background-size: cover;
    background-size: auto 100% ;
`

const CourseExampleInfoBlock = styled.div`
    width: 50%;
`
const CourseExampleInfoText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    line-height: 1.45;
`

const CourseExampleImageLine = styled.div`
    width: 1.5px;
    background: #d4d4d4;
    margin: 0 3vw;
`



const CourseExample = () => {

    const data = useStaticQuery(graphql`
        query ExampleSectionQuery {
            author: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            example1: file(relativePath: { eq: "graph-design/example/example-01.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            example2: file(relativePath: { eq: "graph-design/example/example-02.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
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
