import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';


const ExampleSection = styled.section`
    margin-bottom: 4vw;
`
const ExampleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    padding: 5.5vw 4.7vw 4vw;
    border-radius: 0.5vw;
    
    svg {
        width: 13vw;
        height: 2.2vw;
        margin: 0 auto;
        margin-top: 2vw;
    }
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        padding: 6vw 6vw 7.5vw;
    }
`

const ExampleHeader = styled.div`
    display: flex;
    margin-bottom: 5vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        align-items: center;
        margin-bottom: 10vw;
    }
`
const ExampleAuthor = styled.div`
    min-width: 8vw;
    margin-right: 3vw;
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

const ExampleAuthorImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    width: 7.1vw;
    height: 7.1vw;
    border-radius: 100vw;
    // margin-bottom: 2vw;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        width: 15vw;
        height: 15vw;
        width: 23vw;
        height: 23vw;
    }

`
const ExampleAuthorName = styled.div`
    font-size: 1.15vw;
    margin-left: -0.2vw;
    font-weight: 500;
    margin-top: 0.9vw;
    @media only screen and (max-width: 575px) {
        font-size: 5vw;
        margin-left: 0;
        font-size: 3.7vw;
        margin-top: 1.5vw;
    }
`


const ExampleTitle = styled.div`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.2vw;
    line-height: 1.04;
    position: relative;
    margin-top: -0.8vw;
    margin-left: 0.5vw;
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
        letter-spacing: -0.15vw;
        text-align: center;
        :after {
            margin-left: 0.2vw;
            margin-top: 0.1vw;
            font-size: 7.4vw;
    
        }
        :before {
            font-size: 5vw;
            top: 0.2vw;
            left: -2.5vw;
            font-size: 7.4vw;
        }
    }
`

const ExampleInfoWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }

`
const ExampleImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    min-width: 38vw;
    height: 14vw;
    background-size: cover;
    margin-right: 2.5vw;
    margin-left: -0.5vw;
    @media only screen and (max-width: 575px) {
        margin-right:0;
        margin-left: 0;
        height: 29vw;
        margin-bottom: 3.5vw;
    }
`
const ExampleInfoText = styled.div`
    color: var(--granich-grey);
    font-size: 1.15vw;
    line-height: 1.45;
    span {
        display: block;
        font-weight: 500;
        margin-bottom: 0.5vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 3.8vw;
    }
`

const MasterClassExample = () => {
    const data = useStaticQuery(graphql`
    query MasterClassExampleSectionQuery {
        authorMasterClass: file(relativePath: { eq: "author.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        exampleMasterClass: file(relativePath: { eq: "graph-design/example/example-02.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`)

const imageAuthor = data.authorMasterClass.childImageSharp.fluid
const imageExample = data.exampleMasterClass.childImageSharp.fluid
    return (
        <ExampleSection>
            <Container>
                <ExampleWrapper>
                    <ExampleHeader>
                        <ExampleAuthor>
                            <ExampleAuthorImage  fluid={imageAuthor}></ExampleAuthorImage>
                            <ExampleAuthorName>Вадим Гранич</ExampleAuthorName>
                        </ExampleAuthor>
                        <ExampleTitle> 
                            Исследование базируется на дизайн-системе Курса
                        </ExampleTitle>
                    </ExampleHeader>
                    <ExampleInfoWrapper>
                        <ExampleImage fluid={imageExample}></ExampleImage>
                        <ExampleInfoText>
                        <span>Исследование проходит по 6 элементам дизайна и 3 принципам верстки</span>Тем не менее, вам необязательно проходить курс Осознанный Графдизайн, чтобы изучить мастер-класс по графсистеме. Все необходимые моменты есть в презентации графсистемы.
                        </ExampleInfoText>
                    </ExampleInfoWrapper>
                </ExampleWrapper>
            </Container>
            
        </ExampleSection>
    )
}

export default MasterClassExample
