import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import ExampleArrow from '../../assets/svgs/example-arrow.svg';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

const GraphDesignExampleSection = styled.section`
    margin-bottom: 5vw;
`
const GraphDesignExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    padding: 4vw 4.8vw;
    border-radius: 0.5vw;
    
    svg {
        width: 20vw;
        margin: 0 auto;
    }
`

const GraphDesignExampleHeader = styled.div`
    display: flex;
`
const GraphDesignExampleAuthor = styled.div`
    width: 15vw;
    margin-right: 5vw;
    line-height: 1.4;
`

const GraphDesignExampleAuthorImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 7.1vw;
    height: 7.1vw;
    border-radius: 100vw;
    margin-bottom: 0.3vw;
    overflow: hidden;
`
const GraphDesignExampleAuthorName = styled.div`
    font-size: 1.15vw;
    margin-left: -0.1vw;
    font-weight: 500;
`

const GraphDesignExampleAuthorText = styled.div`
    font-size: 1.15vw;
    color: var(--granich-grey);
    margin-left: -0.1vw;
`

const GraphDesignExampleTitle = styled.div`
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

const GraphDesignExampleInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;

`
const GraphDesignExampleImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 100%;
    height: 12.5vw;
    margin-bottom: 0;
    background-size: cover;
`

const GraphDesignExampleInfoBlock = styled.div`
    width: 50%;
`
const GraphDesignExampleInfoText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    line-height: 1.2;
`

const GraphDesignExampleImageLine = styled.div`
    width: 0.1vw;
    background: #d4d4d4;
    margin: 0 5vw;
`



const GraphDesignExample = () => {

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
        <GraphDesignExampleSection>
            <Container>
                <GraphDesignExampleWrapper>
                    <GraphDesignExampleHeader>
                        <GraphDesignExampleAuthor>
                            <GraphDesignExampleAuthorImage style={{backgroundSize: 'cover'}} fluid={imageData}/>
                            <GraphDesignExampleAuthorName>
                                Вадим Гранич
                            </GraphDesignExampleAuthorName>
                            <GraphDesignExampleAuthorText>автор курса</GraphDesignExampleAuthorText>
                        </GraphDesignExampleAuthor>
                        <GraphDesignExampleTitle>
                            На курсе мы разложим знания по полочкам
                        </GraphDesignExampleTitle>
                    </GraphDesignExampleHeader>
                    <GraphDesignExampleInfoWrapper>
                        <GraphDesignExampleInfoBlock>
                                <GraphDesignExampleImage fluid={data.example1.childImageSharp.fluid}/>
                                <GraphDesignExampleInfoText>
                                    Вы кое-что слышали о шрифтах. Знакомы с цветом. Пользовались jpeg. Возможно, даже делали свои макеты. Но упорядочены ли ваши знания? Неважно, начинаете вы с нуля или у вас уже есть какой-то опыт — знания требуют структурности.
                                </GraphDesignExampleInfoText>
                                
                        </GraphDesignExampleInfoBlock>
                        <GraphDesignExampleImageLine/>
                        <GraphDesignExampleInfoBlock>
                                <GraphDesignExampleImage fluid={data.example2.childImageSharp.fluid}/>
                                <GraphDesignExampleInfoText>
                                    После курса вы сможете уверенно аргументировать свои решения. Будете понимать как работает графический дизайн. Ваши знания станут упорядочены, чтобы быстро достать с нужной полки необходимое.
                                </GraphDesignExampleInfoText>

                        </GraphDesignExampleInfoBlock>
                    </GraphDesignExampleInfoWrapper>
                    <ExampleArrow/>
                    
                </GraphDesignExampleWrapper>
            </Container>
        </GraphDesignExampleSection>
    )
}

export default GraphDesignExample
