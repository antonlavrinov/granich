import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from "gatsby-image";
// import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { graphql, useStaticQuery } from 'gatsby'



const AftermathSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const AftermathSectionTitle = styled.h2`
    font-size: 4vw;
    font-weight: 700;
    letter-spacing: -0.1vw;
    margin-bottom: 2.4vw;
    line-height: 1;
    
    span {
        font-weight: inherit;
        position: relative;
        font-family: EB Garamond;
        font-style: italic;
        font-weight: 500;
        font-size: 5.5vw;
        letter-spacing: -0.2vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        margin-bottom: 4vw;
        br {
            display: none;
        }
        span {
            font-size: 13vw;
        }
    }
`

const AftermathWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 1vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 3vw;
        grid-column-gap: 3vw;
    }

`

const AftermathBlockWrapper = styled.div`
    background: white;
    padding: 1.8vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 2vw;
        padding: 3vw 3vw 4vw;
    }

`

const AftermathBlockImage = styled(props => <BackgroundImage {...props}/>)`
    background: url(${props => props.image}) center center no-repeat;
    // background-size: 90%;
    width: 100%;
    height: 15vw;
    border-radius: 0.2vw;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        height: 35vw;
        border-radius: 1.5vw;
        margin-bottom: 5vw;
    }
`
const AftermathBlockTextBlock = styled.div`
    line-height: 1.35;
    margin-left: -0.1vw;
    font-size: 1.15vw;
    color: var(--granich-grey);
    letter-spacing: -0.02vw;
    max-width: 15vw;
    span {
        font-weight: 500;
        color: var(--granich-black);
        display: block;
    }
    i {
        font-style: normal;
        display: block;
        color: var(--granich-red);
        font-weight: 500;
    }
    @media only screen and (max-width: 575px) {
        margin-left: 0;
        font-size: 3.7vw;
        max-width: 100%;
        line-height: 1.25;
    }
`



const AftermathBlock = ({text, image }) => {



    return (
        <AftermathBlockWrapper>
            {/* <AftermathBlockTitle>{title}</AftermathBlockTitle> */}
            <AftermathBlockImage fluid={image}/>
            <AftermathBlockTextBlock>
                {/* {documentToReactComponents(text)} */}
                {text}
            </AftermathBlockTextBlock>
        </AftermathBlockWrapper> 
    )
}

const CourseAftermath = ({data}) => {
    const dataImages = useStaticQuery(graphql`
        query aftermathImages {
            aftermathImage1: file(relativePath: { eq: "graph-design/aftermath/aftermath-image-01.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            aftermathImage2: file(relativePath: { eq: "graph-design/aftermath/aftermath-image-02.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            aftermathImage3: file(relativePath: { eq: "graph-design/aftermath/aftermath-image-03.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            aftermathImage4: file(relativePath: { eq: "graph-design/aftermath/aftermath-image-04.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 350, quality: 90) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData1 = dataImages.aftermathImage1.childImageSharp.fluid
    const imageData2 = dataImages.aftermathImage2.childImageSharp.fluid
    const imageData3 = dataImages.aftermathImage3.childImageSharp.fluid
    const imageData4 = dataImages.aftermathImage4.childImageSharp.fluid

    return (
        <AftermathSection>
            <Container>
                {/* <AftermathSectionTitle>
                После курса вы получите <span>твёрдую базу</span> для дальнейшего изучения:
                </AftermathSectionTitle> */}
                <AftermathSectionTitle>
                Вы получите <span>твёрдую базу</span> <br/>для дальнейшего изучения:
                </AftermathSectionTitle>
                <AftermathWrapper>
                    {/* {data.edges.map(Aftermath => {
                        return (
                            <AftermathBlock key={Aftermath.node.id} image={Aftermath.node.AftermathImage.fluid}
                                title={Aftermath.node.AftermathTitle}
                                text={Aftermath.node.AftermathText.json}
              
                            />
                        )
                    })} */}
                    <AftermathBlock 
                        image={imageData1}
                        text={(<><span>Медиадизайна</span>промосайты, интерактивные лонгриды. (Медиадизайн — это подраздел веб-дизайна)</>)}
    
                    />
                    <AftermathBlock 
                        image={imageData2}
                        text={(<><span>Айдентики
                            </span>визуальное оформление компаний</>)}
    
                    />
                    <AftermathBlock 
                        image={imageData3}
                        text={(<><span>Дизайна упаковки
                            </span>оформление потребительских товаров</>)}
    
                    />
                    <AftermathBlock 
                        image={imageData4}
                        text={(<><span>UI-дизайна
                            </span>оформление интерфейсов диджитал-продуктов, <i>не путать с UX!</i>
</>)}
    
                    />

                </AftermathWrapper>
            </Container>
        </AftermathSection>
    )
}

export default CourseAftermath
