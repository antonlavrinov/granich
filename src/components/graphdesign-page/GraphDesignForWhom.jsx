import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'




const ForWhomSection = styled.section`
    margin-bottom: 50px;
`

const ForWhomSectionTitle = styled.div`
    font-size: 50px;
    font-weight: 600;
`

const ForWhomWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`

const ForWhomBlockWrapper = styled.div`
    width: 33,3%;
    background: white;
    padding: 20px 35px;
    margin-right: 20px;
    :last-child {
        margin-right: 0;
    }

`
const ForWhomBlockTitle = styled.div`
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
const ForWhomBlockImage = styled(props => <Img {...props}/>)`
    background: url(${props => props.image}) center center no-repeat;
    background-size: 90%;
    width: 100%;
    height: 300px;
`
const ForWhomBlockTextBlock = styled.div`
    display: flex;
`

const ForWhomBlockText = styled.div`
    color: grey;
    font-size: 16px;
    span {
        font-weight: 600;
        font-size: inherit;
        color: black;
    }
`

const ForWhomBlockTextLine = styled.div`
    width: 25%;
    margin-right: 5px;
`

const ForWhomBlockRedLine = styled.div`
    height: 40%;
    background: var(--granich-red);
    width: 2px;

`
const ForWhomBlockGreyLine = styled.div`
    height: 60%;
    background: var(--granich-grey);
    width: 2px;
`

const ForWhomBlock = ({image, title, subtitle, text }) => {

    return (
        <ForWhomBlockWrapper>
            <ForWhomBlockTitle>{title}</ForWhomBlockTitle>
            <ForWhomBlockImage fixed={image}/>
            <ForWhomBlockTextBlock>
                <ForWhomBlockTextLine>
                    <ForWhomBlockRedLine/>
                    <ForWhomBlockGreyLine/>
                </ForWhomBlockTextLine>
                <ForWhomBlockText>
                <span>{subtitle}</span> <br/>
                {text}
            </ForWhomBlockText>
            </ForWhomBlockTextBlock>


        </ForWhomBlockWrapper> 
    )
}

const ForWhom = () => {
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
        <ForWhomSection>
            <Container>
                <ForWhomSectionTitle>
                    Для кого курс?
                </ForWhomSectionTitle>
                <ForWhomWrapper>
                    <ForWhomBlock image={image1}
                                  title="Что такое графдизайн?"
                                  subtitle="Графдизайн — это вид визуальной коммуникации"
                                  text="Главный канал этой коммуникации — печатный или цифровой макет (layout). Через него графдизайнер помогает бизнесу говорить с аудиторией: оповещать, обучать, убеждать"
                    
                    />
                    <ForWhomBlock image={image2}
                                  title="Что создают графдизайнеры?"
                                  subtitle="Информационные, имиджевые и рекламные макеты"
                                  text="Информационные, чтобы информация быстро и прочно попала в сознание зрителя. Имиджевые транслируют нужный образ компании. Рекламные убеждают что-либо купить"
                    
                    />
                    <ForWhomBlock image={image3}
                                  title="Что после графдизайна?"
                                  subtitle="Печатка, веб,айдентика и медиадизайн"
                                  text="Часто графические дизайнеры переходят к созданию айдентики. Другие отправляются в веб-дизайн. Ну а третьи штурмуют периодические издания. Причем как печатные так и онлайновые"
                    
                    />
                </ForWhomWrapper>
            </Container>
        </ForWhomSection>
    )
}

export default ForWhom
