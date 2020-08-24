import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'




const ExplanationsSection = styled.section`
    margin-bottom: 5vw;
`


const ExplanationsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
`

const ExplanationsBlockWrapper = styled.div`
    background: white;
    border-radius: 0.5vw;
    padding: 2.3vw 1.7vw 2.3vw;
    position: relative;
    

`
const ExplanationsBlockTitle = styled.div`
    font-size: 2.3vw;
    line-height: 1;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    width: 14vw;
    margin-bottom: 2.5vw;

    :before {
        content: '';
        background: var(--granich-red);
        position: absolute;
        top: 2.5vw;
        right: 1.5vw;
        width: 0.68vw;
        height: 0.68vw;
        border-radius: 100vw;
        transform: translateX(-50%);
        font-size: 1vw;

    }
`
const ExplanationsBlockImage = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 17vw;
    margin-bottom: 2.2vw;

`
const ExplanationsImage = styled(props => <Img {...props}/>)`
    width: 88%;
`

const ExplanationsBlockTextBlock = styled.div`
    display: flex;
`

const ExplanationsBlockText = styled.div`
    color: grey;
    font-size: 1.17vw;
    letter-spacing: -0.01vw;
    line-height: 1.55vw;
`

const ExplanationsBlockTextTitle = styled.div`
    letter-spacing: inherit;
    font-weight: 500;
    font-size: inherit;
`

const ExplanationsBlockTextLine = styled.div`
    // width: 25%;
    margin-right: 0.9vw;
    margin-left: 0.5vw;
`

const ExplanationsBlockRedLine = styled.div`
    height: 23%;
    background: var(--granich-red);
    width: 0.1vw;

`
const ExplanationsBlockGreyLine = styled.div`
    height: 77%;
    background: #E2E2E2;
    width: 0.1vw;
`

const ExplanationsBlock = ({image, title, subtitle, text }) => {

    return (
        <ExplanationsBlockWrapper>
            <ExplanationsBlockTitle>{title}</ExplanationsBlockTitle>
            <ExplanationsBlockImage>
                <ExplanationsImage fluid={image}/>
            </ExplanationsBlockImage>
            <ExplanationsBlockTextBlock>
                <ExplanationsBlockTextLine>
                    <ExplanationsBlockRedLine/>
                    <ExplanationsBlockGreyLine/>
                </ExplanationsBlockTextLine>
                <ExplanationsBlockText>
                    <ExplanationsBlockTextTitle>{subtitle}</ExplanationsBlockTextTitle>
                    {text}
                </ExplanationsBlockText>
            </ExplanationsBlockTextBlock>


        </ExplanationsBlockWrapper> 
    )
}

const CourseExplanations = () => {
    const data = useStaticQuery(graphql`
        query {
            image1 : file(relativePath: { eq: "course-page-answers-section-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            image2 : file(relativePath: { eq: "course-page-answers-section-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            image3 : file(relativePath: { eq: "course-page-answers-section-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `
    )
    const image1 = data.image1.childImageSharp.fluid
    const image2 = data.image2.childImageSharp.fluid
    const image3 = data.image3.childImageSharp.fluid
    return (
        <ExplanationsSection>
            <Container>
                <ExplanationsWrapper>
                    <ExplanationsBlock image={image1}
                                  title="Что такое графдизайн?"
                                  subtitle="Графдизайн — это вид визуальной коммуникации"
                                  text="Главный канал этой коммуникации — печатный или цифровой макет (layout). Через него графдизайнер помогает бизнесу говорить с аудиторией: оповещать, обучать, убеждать"
                    
                    />
                    <ExplanationsBlock image={image2}
                                  title="Что создают графдизайнеры?"
                                  subtitle="Информационные, имиджевые и рекламные макеты"
                                  text="Информационные, чтобы информация быстро и прочно попала в сознание зрителя. Имиджевые транслируют нужный образ компании. Рекламные убеждают что-либо купить"
                    
                    />
                    <ExplanationsBlock image={image3}
                                  title="Что после графдизайна?"
                                  subtitle="Печатка, веб,айдентика и медиадизайн"
                                  text="Часто графические дизайнеры переходят к созданию айдентики. Другие отправляются в веб-дизайн. Ну а третьи штурмуют периодические издания. Причем как печатные так и онлайновые"
                    
                    />
                </ExplanationsWrapper>
            </Container>
        </ExplanationsSection>
    )
}

export default CourseExplanations
