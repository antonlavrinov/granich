import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'




const AnswersSection = styled.section`
    margin-bottom: 50px;
`


const AnswersWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const AnswersBlockWrapper = styled.div`
    width: 33,3%;
    background: white;
    padding: 20px 35px;
    margin-right: 20px;
    :last-child {
        margin-right: 0;
    }

`
const AnswersBlockTitle = styled.div`
    font-size: 40px;
    line-height: 0.8;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;

    :before {
        content: '.';
        color: var(--granich-red);
        font-size: 80px;
        line-height: 0.5;
        margin-left: -20px;

    }
`
const AnswersBlockImage = styled(props => <Img {...props}/>)`
    background: url(${props => props.image}) center center no-repeat;
    background-size: 90%;
    width: 100%;
    height: 300px;
`
const AnswersBlockTextBlock = styled.div`
    display: flex;
`

const AnswersBlockText = styled.div`
    color: grey;
    font-size: 16px;
    span {
        font-weight: 600;
        font-size: inherit;
        color: black;
    }
`

const AnswersBlockTextLine = styled.div`
    width: 25%;
    margin-right: 5px;
`

const AnswersBlockRedLine = styled.div`
    height: 40%;
    background: var(--granich-red);
    width: 2px;

`
const AnswersBlockGreyLine = styled.div`
    height: 60%;
    background: var(--granich-grey);
    width: 2px;
`

const AnswersBlock = ({image, title, subtitle, text }) => {

    return (
        <AnswersBlockWrapper>
            <AnswersBlockTitle>{title}</AnswersBlockTitle>
            <AnswersBlockImage fixed={image}/>
            <AnswersBlockTextBlock>
                <AnswersBlockTextLine>
                    <AnswersBlockRedLine/>
                    <AnswersBlockGreyLine/>
                </AnswersBlockTextLine>
                <AnswersBlockText>
                <span>{subtitle}</span> <br/>
                {text}
            </AnswersBlockText>
            </AnswersBlockTextBlock>


        </AnswersBlockWrapper> 
    )
}

const Answers = () => {
    const data = useStaticQuery(graphql`
        query {
            image1 : file(relativePath: { eq: "course-page-answers-section-01.png" }) {
                childImageSharp {
                    fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            image2 : file(relativePath: { eq: "course-page-answers-section-01.png" }) {
                childImageSharp {
                    fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
            image3 : file(relativePath: { eq: "course-page-answers-section-01.png" }) {
                childImageSharp {
                    fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
        `
    )
    const image1 = data.image1.childImageSharp.fixed
    const image2 = data.image2.childImageSharp.fixed
    const image3 = data.image3.childImageSharp.fixed
    return (
        <AnswersSection>
            <Container>
                <AnswersWrapper>
                    <AnswersBlock image={image1}
                                  title="Что такое графдизайн?"
                                  subtitle="Графдизайн — это вид визуальной коммуникации"
                                  text="Главный канал этой коммуникации — печатный или цифровой макет (layout). Через него графдизайнер помогает бизнесу говорить с аудиторией: оповещать, обучать, убеждать"
                    
                    />
                    <AnswersBlock image={image2}
                                  title="Что создают графдизайнеры?"
                                  subtitle="Информационные, имиджевые и рекламные макеты"
                                  text="Информационные, чтобы информация быстро и прочно попала в сознание зрителя. Имиджевые транслируют нужный образ компании. Рекламные убеждают что-либо купить"
                    
                    />
                    <AnswersBlock image={image3}
                                  title="Что после графдизайна?"
                                  subtitle="Печатка, веб,айдентика и медиадизайн"
                                  text="Часто графические дизайнеры переходят к созданию айдентики. Другие отправляются в веб-дизайн. Ну а третьи штурмуют периодические издания. Причем как печатные так и онлайновые"
                    
                    />
                </AnswersWrapper>
            </Container>
        </AnswersSection>
    )
}

export default Answers
