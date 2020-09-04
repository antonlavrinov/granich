import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from "gatsby-image";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';




const ForWhomSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`

const ForWhomSectionTitle = styled.div`
    font-size: 4.55vw;
    font-weight: 700;
    letter-spacing: -0.2vw;
    margin-bottom: 2.4vw;
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        margin-bottom: 4vw;
    }
`

const ForWhomWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        grid-row-gap: 5vw;
    }

`

const ForWhomBlockWrapper = styled.div`
    background: white;
    padding: 1.8vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        border-radius: 3vw;
        padding: 14vw 4vw 7vw;
    }

`
const ForWhomBlockTitle = styled.div`
    font-size: 1.5vw;
    line-height: 0.8;
    text-align: center;
    font-family: EB Garamond;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.6vw;
    margin-top: 3.6vw;
    width: 100%;
    position: relative;
    margin-bottom: 2.15vw;
    :before {
        content: '';
        background: var(--granich-red);
        position: absolute;
        top: -2.8vw;
        left: 10vw;
        width: 0.68vw;
        height: 0.68vw;
        border-radius: 100vw;
        transform: translateX(-50%);
        font-size: 1vw;
        // line-height: 0.5;

    }
    @media only screen and (max-width: 575px) {
        font-size: 5.1vw;
        letter-spacing: 1.9vw;
        margin-bottom: 6.5vw;
        :before {
            top: -8.6vw;
            left: 50%;
            width: 2.3vw;
            height: 2.3vw;
        }
    }
`
const ForWhomBlockImage = styled(props => <BackgroundImage {...props}/>)`
    background: url(${props => props.image}) center center no-repeat;
    // background-size: 90%;
    width: 100%;
    height: 19.4vw;
    border-radius: 0.2vw;
    margin-bottom: 2vw;
    @media only screen and (max-width: 575px) {
        height: 75.4vw;
        border-radius: 1.5vw;
        margin-bottom: 5vw;
    }
`
const ForWhomBlockTextBlock = styled.div`
    line-height: 1.45;
    margin-left: -0.1vw;
    p {
        font-size: 1.15vw;
        color: var(--granich-grey);
        letter-spacing: -0.02vw;
    }
    @media only screen and (max-width: 575px) {
        margin-left: 0;
        p {
            font-size: 3.7vw;
        }
    }
`



const ForWhomBlock = ({image, title, text }) => {

    return (
        <ForWhomBlockWrapper>
            <ForWhomBlockTitle>{title}</ForWhomBlockTitle>
            <ForWhomBlockImage fluid={image}/>
            <ForWhomBlockTextBlock>
                {documentToReactComponents(text)}
            </ForWhomBlockTextBlock>
        </ForWhomBlockWrapper> 
    )
}

const CourseForWhom = ({data}) => {


    return (
        <ForWhomSection>
            <Container>
                <ForWhomSectionTitle>
                    Для кого курс?
                </ForWhomSectionTitle>
                <ForWhomWrapper>
                    {data.edges.map(forWhom => {
                        return (
                            <ForWhomBlock key={forWhom.node.id} image={forWhom.node.forWhomImage.fluid}
                                title={forWhom.node.forWhomTitle}
                                text={forWhom.node.forWhomText.json}
              
                            />
                        )
                    })}

                </ForWhomWrapper>
            </Container>
        </ForWhomSection>
    )
}

export default CourseForWhom
