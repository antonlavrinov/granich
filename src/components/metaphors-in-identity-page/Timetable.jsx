import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby'


const TimetableSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 5vw;
    }
`
const TimetableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    padding: 3.3vw 3.3vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        flex-direction: column;
        padding: 6vw 6vw 7vw;
        border-radius: 2.5vw;
    }
`




const TimetableTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 1;
    margin-top: -0.6vw;
    margin-bottom: 1vw;
    line-height: 1.1;
    white-space: nowrap;
    span {
        font-family: EB Garamond;
        font-style: italic;
        font-weight: 500;
        font-size: 5.4vw;
        line-height: 1;
        position: relative;
        margin-left: -0.2vw;
        white-space: normal;
        display: block;
        letter-spacing: -0.115vw;
    }


    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        white-space: normal;
        margin-bottom: 2vw;
        span {
            white-space: normal;
            font-size: 10.4vw;
            margin-left: 0;
            letter-spacing: -0.4vw;
            margin-bottom: 6.8vw;
            line-height: 0.9;
        }
        
    }

`

const TimetabaleInfo = styled.div`
    font-size: 1.35vw;
    line-height: 1.45;
    margin-bottom: 2vw;
    font-weight: 500;
    @media only screen and (max-width: 575px) {
        font-size: 3.5vw;
    }
`

// const TimetableImageWrapper = styled.div`

//     margin-right: 4%;
//     height: auto;
//     min-width: 48%;
//     width: 48%;
//     @media only screen and (max-width: 575px) {
//         min-width: 100%;
//         width: 100%;
//         margin-right: 0;
//     }
// `

const TimetableImage = styled(props => <Img {...props} />)`
    width: 100%;
    // border: 1.5px solid rgba(0,0,0,0.15);
    @media only screen and (max-width: 575px) {
        border: 1.5px solid rgba(0,0,0,0.15);
    }

`

const Timetable = () => {

    const data = useStaticQuery(graphql`
        query timetableMetaphorsImage {
            imageTimetableMetaphors: file(relativePath: { eq: "metaphors-in-identity-page/metaphors-in-identity-page_table.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 1400 quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const imageData = data.imageTimetableMetaphors.childImageSharp.fluid
    const text = "Каждый этап начинается в понедельник. В рамках каждого этапа мы тренируем графические метафоры в новых нишах бизнеса. Ученик выбирает себе какие-то ниши бизнеса (1 или 2), по которым начинает прорабатывать какие-то графические метафоры. В среду есть возможность прислать мне свои наработки для первого видеоразбора. В субботу присылаем свои наработки для второго разбора. Я записываю видеоразбор всем ученикам.";

    return (
        <TimetableSection>
            <Container>
                <TimetableWrapper>
                    <TimetableTitle>
                        Расписание
                    </TimetableTitle>
                    <TimetabaleInfo>
                        {text}
                    </TimetabaleInfo>
                    <TimetableImage fluid={imageData}/>
                </TimetableWrapper>
            </Container>
        </TimetableSection>
    )
}

export default Timetable
