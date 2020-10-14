import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from 'gatsby-image';
// import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import Zoom from 'react-medium-image-zoom'
// import ArrowIcon from '../../assets/svgs/graph-design/graph-design-training-path-arrow.svg';
// import CheckIcon from '../../assets/svgs/graph-design/graph-design-training-path-check.svg';
import { graphql, useStaticQuery } from 'gatsby'

// const Arrow = styled(props => <ArrowIcon {...props}/>)`
//     width: 3vw;
//     margin-left: 1.5vw;
//     fill: var(--granich-red);
//     @media only screen and (max-width: 575px) {
//         transform: rotate(90deg);
//         width: 7vw;
//         margin-left: 0;
//         margin-top: 1vw;
//     }
// `

// const Check = styled(props => <CheckIcon {...props}/>)`
//     width: 3vw;
//     margin-left: 1.5vw;
//     fill: var(--granich-red);
//     @media only screen and (max-width: 575px) {
//         width: 7vw;
//         margin-left: 0.5vw;
//         margin-top: 1.5vw;
//     }
// `


const TrainingPathSection = styled.section`
    margin-bottom: 4vw;
    margin-top: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        margin-top: 5vw;
    }
    
`


const TrainingPathWrapper = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
        grid-template-columns: 1fr;
        grid-row-gap: 4vw;
    }
`

const TrainingPathBlockWrapper = styled.div`
    background: white;
    display: flex;
    flex-direction: column;

    border-radius: 0.6vw;
    position: relative;
    // :before {
    //     content: '';
    //     width: 21vw;
    //     height: 21vw;
    //     // background: var(--granich-red);
    //     background: #f2f2f2;
    //     position: absolute;
    //     top: 1.25vw;;
    //     left: 50%;
    //     transform: translateX(-50%);
    //     border-radius: 100vw;
    // }
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
        // :before {
        //     content: '';
        //     width: 50vw;
        //     height: 50vw;
        //     position: absolute;
        //     top: 4vw;;
        //     left: 50%;
        //     transform: translateX(-50%);
        //     border-radius: 100vw;
        // }
    }

`
const TrainingPathBlockContainer = styled.div`
    padding: 2.7vw 2vw 1vw;
    display: flex;


    @media only screen and (max-width: 575px) {
        padding: 5vw 5vw 2vw;
        display: flex;
    }
`



// const TrainingPathBlockNumber = styled.div`
//     font-family: EB Garamond;
//     font-style: italic;
//     font-size: 5.4vw;
//     font-weight: 500;
//     position: relative;
//     letter-spacing: 0;
//     line-height: 1;
//     margin-left: -0.1vw;
//     margin-bottom: 1vw;
//     @media only screen and (max-width: 575px) {
//         font-size: 13vw;
//         margin-bottom: 4vw;
//         margin-left: 0;
//         display: flex;
//         flex-direction: column;
//         margin-right: 6vw;
//         margin-top: -0.5vw;
//     }
// `

const TrainingPathBlockText = styled.div`
    padding: 0.5vw 2vw 2vw;
    line-height: 1.35;
    color: var(--granich-grey);
    font-size: 1.15vw;
    letter-spacing: -0.01vw;
    b {
        display: block;
        font-weight: 600;
        color: var(--granich-black);
        margin-bottom: 0.35vw;
    }
    @media only screen and (max-width: 575px) {
        padding: 0 5vw 5vw;
        font-size: 3.7vw;
        b {
            margin-bottom: 1vw;
        }

        margin-top: 2vw;
    }


`

const TrainingPathBlockImage = styled.div`
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;
    margin-top: auto;
    margin: 0 auto;




    div {
        width: 100%;
        height: 18vw;
    }


    @media only screen and (max-width: 575px) {
        width: 100%;
        div {
            height: 45vw;
        }
        :hover {
            transform: none;
    
        }
    }

    ${props => props.half && `
        width: 46%;
        
        :last-child {
            margin-right: 0;
        }
        @media only screen and (max-width: 575px) {
            margin-right: 4%;
        }

    `}
`



const TrainingPathImage = styled(props => <Img {...props}/>)`
    width: 100%;
    background-size: cover;
    box-shadow: 0 0 0.4vw rgba(0,0,0,0.4);
    @media only screen and (max-width: 575px) {
        height: 44vw;    
        box-shadow: 0 0 1.8vw rgba(0,0,0,0.4);
    }

`

const TrainingPathSectionTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.55vw;
    letter-spacing: -0.1vw;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 2.5vw;
    span {
        text-transform: uppercase;
        font-weight: 900;
    }
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-bottom: 4vw;
        br {
            display: none;
        }
        
    }
`



const CourseTrainingPath = () => {
    const dataImage = useStaticQuery(graphql`
        query trainingPathImages {
            trainingPathImage1: file(relativePath: { eq: "graph-design/training-path/training-path-01.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            trainingPathImage2: file(relativePath: { eq: "graph-design/training-path/training-path-02.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            trainingPathImage3: file(relativePath: { eq: "graph-design/training-path/training-path-03.png" }) {
                childImageSharp {
                    fluid(maxWidth: 700) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }


        }
    `)

    const image1 = dataImage.trainingPathImage1.childImageSharp.fluid;
    const image2 = dataImage.trainingPathImage2.childImageSharp.fluid;
    const image3 = dataImage.trainingPathImage3.childImageSharp.fluid;

    return (
        <TrainingPathSection>
            <Container>
                <TrainingPathSectionTitle>Особенность курса — <br/><span>много</span> обратной связи</TrainingPathSectionTitle>
                <TrainingPathWrapper>
                            <TrainingPathBlockWrapper>
                                <TrainingPathBlockContainer>
                                    <TrainingPathBlockImage half>
                                        <Zoom>
                                            <TrainingPathImage fluid={image1}></TrainingPathImage>
                                        </Zoom>
                                    </TrainingPathBlockImage>
                                    <TrainingPathBlockImage half>
                                        <Zoom>
                                            <TrainingPathImage fluid={image2}></TrainingPathImage>
                                        </Zoom>
                                    </TrainingPathBlockImage>
                                    {/* <TrainingPathBlockNumber >{block.node.trainingPathTitle}{idx === 3 ? <Check/> : <Arrow/>}</TrainingPathBlockNumber> */}
                                    
                                </TrainingPathBlockContainer>
                                <TrainingPathBlockText>Я прекрасно знаю, как важен человеческий контакт во время обучения. Поэтому я я кураторами подготовились к тому, чтобы вы чувствовали нашу заботу. Кураторы будут записывать для вас подробные видеоразборы по каждому ДЗ (до получаса запросто)</TrainingPathBlockText>

                            </TrainingPathBlockWrapper>
                            <TrainingPathBlockWrapper>
                                <TrainingPathBlockContainer>
                                    <TrainingPathBlockImage >
                                        <Zoom>
                                            <TrainingPathImage fluid={image3}></TrainingPathImage>
                                        </Zoom>
                                    </TrainingPathBlockImage>
                                    {/* <TrainingPathBlockNumber >{block.node.trainingPathTitle}{idx === 3 ? <Check/> : <Arrow/>}</TrainingPathBlockNumber> */}
                                    
                                </TrainingPathBlockContainer>
                                <TrainingPathBlockText>Но на этом кураторы не остановятся! С ними вы еще будете создавать портфолио из творческих макетов и многостраничного экзамена. И по ним вы будете получать отдельную обратную связь. Уверяю вас, к финалу вы уже устанете от обратной связи, а кураторы всё будут и будут давать вам её :)</TrainingPathBlockText>

                            </TrainingPathBlockWrapper>
                        


                </TrainingPathWrapper>
            </Container>
        </TrainingPathSection>
    )
}

export default CourseTrainingPath
