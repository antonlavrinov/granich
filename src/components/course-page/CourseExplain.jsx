import React from 'react'
import styled from 'styled-components';
import { Container } from '../style';
// import Exclamation from '../../assets/svgs/exclamation-mark.svg';
// import CurrencyIcon from '../../assets/svgs/graph-design/graph-design-currency.svg';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby'


const ExplainSection = styled.section`
    margin-bottom: 4vw;
    margin-top: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        margin-top: 5vw;
    }

`
const ExplainWrapper = styled.div`
    background: white;
    padding: 4vw 4vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        padding: 6vw 6vw 6vw 6vw;
        border-radius: 2.5vw;
    }
`

const ExplainTitle = styled.h2`
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 500;
    font-size: 5.4vw;
    line-height: 0.75;
    position: relative;
    margin-bottom: 4vw;
    margin-left: 0vw;
    white-space: nowrap;
    letter-spacing: -0.01vw;
    @media only screen and (max-width: 575px) {
        white-space: normal;
        font-size: 10.4vw;
        margin-left: 0;
        letter-spacing: -0.1vw;
        margin-bottom: 6.8vw;
        line-height: 0.9;
    }
`
const ExplainItems = styled.div`
    display: flex;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        margin-bottom: 1vw;
    }
`
const ExplainItem = styled.div`
    display: flex;
    align-items: center;
    margin-right: 6.2vw;
    font-size: 2vw;
    margin-bottom: 2vw;
`
const ExplainItemNumber = styled.div`

        font-family: EB Garamond;
        font-style: italic;
        font-size: 4.5vw;
        font-weight: 500;
        align-text: center;
        background: #f2f2f2;
        border-radius: 100vw;
        height: 4.1vw;
        width: 4.1vw;
        min-height: 4.1vw;
        min-width: 4.1vw;
        line-height: 0.8;
        letter-spacing: -0.4vw;
        padding-left: 0.8vw;
        margin-bottom: 0.6vw;
        margin-right: 1.5vw;


    @media only screen and (max-width: 575px) {
        height: 10vw;
        width: 10vw;
        min-height: 10vw;
        min-width: 10vw;
        font-size: 10vw;
        line-height: 0.9;
        padding-left: 2.5vw;
        margin-bottom: 3vw;
        background: #f2f2f2;
        margin-right: 3.5vw;
    }
`
const ExplainItemText = styled.div`
    font-size: 2vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 5vw;
        margin-top: -2vw;
    }
`
const ExplainInfoWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
    }
`
const ExplainInfoText = styled.div`
    font-size: 1.45vw;
    line-height: 1.4;
    max-width: 70%;
    width: 70%;
    font-weight: 500;
    margin-right: 1vw;
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        margin-bottom: 3vw;
        max-width: 100%;
        width: 100%;
    }
`
const ExplainInfoBonus = styled.div`
    display: flex;
    background: #f2f2f2;
    align-items: center;
    padding: 1.3vw 9vw 1.3vw 1.8vw;
    border-radius: 0.5vw;
    position: relative;
    margin-left: auto;
    svg {
        width: 7vw;
        fill: rgba(0,0,0,0.35);
        margin-right: 1vw;
    }
    @media only screen and (max-width: 575px) {
        padding: 4vw 0 4vw 5vw;
        width: 100%;
        border-radius: 1.5vw;
        svg {
            width: 11vw;
            height: auto;
            fill: rgba(0,0,0,0.35);
            margin-right: 0vw;
        }
    }

`
// const ExplainBonusWrapper = styled.div`
//     padding: 1.5vw;
// `

const ExplainInfoBonusText = styled.div`
    font-size: 1.45vw;
    max-width: 14vw;
    color: rgba(0,0,0,0.5);
    font-weight: 500;
    
    @media only screen and (max-width: 575px) {
        font-size: 3.7vw;
        max-width: 100%;
        margin-left: -1vw;
    }
`

const ExplainImage = styled(props => <Img {...props}/>)`
    width: 8vw;
    bottom: 0;
    right: 0;
    @media only screen and (max-width: 575px) {
        width: 20vw;
    }

`


const CourseExplain = () => {
    const data = useStaticQuery(graphql`
        query explainImage {
            explainImageFry: file(relativePath: { eq: "graph-design/explain/shut-up-and-take-my-money.png" }) {
                childImageSharp {
                    fluid(maxWidth: 300 , quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData = data.explainImageFry.childImageSharp.fluid

    return (
        <ExplainSection id="individual-Explain">
            <Container>
                <ExplainWrapper>
                    <ExplainTitle>Зачем нужен графдизайн?</ExplainTitle>
                    <ExplainItems>
                        <ExplainItem>
                            <ExplainItemNumber>1</ExplainItemNumber>
                            <ExplainItemText>Оповещать</ExplainItemText>
                        </ExplainItem>
                        <ExplainItem>
                            <ExplainItemNumber>2</ExplainItemNumber>
                            <ExplainItemText>Обучать</ExplainItemText>
                        </ExplainItem>
                        <ExplainItem>
                            <ExplainItemNumber>3</ExplainItemNumber>
                            <ExplainItemText>Убеждать</ExplainItemText>
                        </ExplainItem>
                    </ExplainItems>
                    <ExplainInfoWrapper>
                        <ExplainInfoText>Овладев графдизайном вы станете визуальным голосом ваших клиентов. Через макеты вы дадите возможность их бизнесу оповещать, обучать, убеждать. </ExplainInfoText>
                        <ExplainInfoBonus>
                            
                            {/* <ExplainBonusWrapper> */}
                                <ExplainInfoBonusText>Это востребовано на рынке</ExplainInfoBonusText>
                            {/* </ExplainBonusWrapper> */}
                            <ExplainImage style={{ position: 'absolute'}} fluid={imageData}/>
                            
                            
                        </ExplainInfoBonus>
                    </ExplainInfoWrapper>


                </ExplainWrapper>
            </Container>
        </ExplainSection>
    )
}

export default CourseExplain

