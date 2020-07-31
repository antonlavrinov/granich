import React from 'react'
import styled from 'styled-components';
import author from '../assets/images/author.jpg';
import { Container } from './style';
import parse from 'html-react-parser';
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'


const ManifestSection = styled.section`


`
const ManifestWrapper = styled.div`

    background: white;
    padding: 4vw 5.3vw 5vw;
    border-radius: 1vw;
`
const ManifestSecondaryWrapper = styled.div`
    display: flex;
`
const ManifestAuthor = styled.div`
    margin-top: -1.6vw;
    margin-right: 7vw;
`

const ManifestInfo = styled.div`

`

const ManifestAuthorImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 14.3vw;
    height: 14.3vw;
    border-radius: 100vw;
    overflow: hidden;
    margin-left: -1.4vw;
    margin-bottom: 1.8vw;
    margin-top: 2vw;
`

const ManifestAuthorName = styled.div`
    font-size: 1.16vw;
    font-weight: 500;
    line-height: 1.4;
    margin-left: 1.1vw;
`

const ManifestAuthorText = styled.div`
    margin-left: 1.1vw;
    font-size: 1.16vw;
    line-height: 1.4;
    color: var(--granich-grey);
`

const ManifestInfoTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.5vw;
    line-height: 0.75;
    position: relative;
    margin-bottom: 3.1vw;
    margin-left: 1.4vw;
    letter-spacing: -0.115vw;
    :after {
        content: '»';
        margin-left: 1vw;
        margin-top: 0.4vw;
        position: absolute;
        font-size: 5.5vw;

    }
    :before {
        content: '«';
        position: absolute;
        font-size: 5.5vw;
        top: -0.8vw;
        left: -3.5vw;
    }

`

const ManifestInfoText = styled.p`
    font-size: 1.55vw;
    line-height: 1.5;
    width: 45vw;
    margin-bottom: 2.5vw;


`

const ManifestInfoRules = styled.div`
    display: flex;
`

const ManifestInfoRule = styled.div`
    position: relative;
    font-size: 1.15vw;
    color: var(--granich-grey);
    width: 13.1vw;
    line-height: 1.4;
    margin-right: 2.1vw;

`

const ManifestRuleTitle = styled.span`
    display: block;
    font-weight: 500;
    font-size: 1.15vw;

`

const ManifestRuleNumber = styled.div`
    position: absolute;
    top: 0.5vw;
    left: -2.5vw;
    font-size: 2.5vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 400;
    line-height: 0.5;
`


const Manifest = () => {
    const data = useStaticQuery(graphql`
        query authorImage {
            placeholderImage: file(relativePath: { eq: "author.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 700, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    console.log('data', data)
    const imageData = data.placeholderImage.childImageSharp.fluid
    return (
        <ManifestSection id="manifest">
            <Container>
                <ManifestWrapper>
                    <ManifestInfoTitle>
                        Делай из любви, а не страха
                    </ManifestInfoTitle>
                    <ManifestSecondaryWrapper>
                        <ManifestAuthor>
                            <ManifestAuthorImage fluid={imageData} style={{backgroundSize: 'cover'}}/>
                            <ManifestAuthorName>Вадим Гранич</ManifestAuthorName>
                            <ManifestAuthorText>Создатель школы, <br/>автор курсов</ManifestAuthorText>
                        </ManifestAuthor>
                        <ManifestInfo>

                            <ManifestInfoText>
                                Сюда приходят, чтобы с любовью развивать в себе твердые навыки, а не из страха срочно понахвататься каких-то знаний. Поэтому, создавая курсы, я придерживаясь трех принципов:
                            </ManifestInfoText>
                            <ManifestInfoRules>
                                <ManifestRule title={`Выточенно —`}
                                            text={`Вся информация <br/>
                                                на курсах очищена <br/>
                                                от лишнего, <br/>
                                                грамотно подана <br/>
                                                и структурирована`}
                                            number={1}
                                />
                                <ManifestRule title={`Интенсивно —`}
                                            text={`Курсы занимают много времени, акцент на практику (смотрите фильм Одержимость)`}
                                            number={2}
                                />
                                <ManifestRule title={`С дедлайнами —`}
                                            text={`Не получится просто взять курс и забыть о нем. Дедлайны будут постоянно вас <br/>толкать вперед`}
                                            number={3}
                                />
                            </ManifestInfoRules>
                        </ManifestInfo>
                    </ManifestSecondaryWrapper>

                </ManifestWrapper>
            </Container>
        </ManifestSection>
    )
}

export default Manifest


const ManifestRule = ({title, text, number}) => {
    return (
        <ManifestInfoRule>
            <ManifestRuleTitle>{title}</ManifestRuleTitle>
                {parse(text)}
                <ManifestRuleNumber>{number}</ManifestRuleNumber>
        </ManifestInfoRule>
    )
}