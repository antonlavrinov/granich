import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import ArrowIcon from '../../assets/svgs/white-arrow-inter.svg';
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image';




const OpportunitiesSection = styled.section`
    margin-bottom: 4vw;
    @media only screen and (max-width: 575px) {
        margin-bottom: 3vw;
    }
`


const OpportunitiesWrapper = styled.div`
    border-radius: 0.6vw;
    
    @media only screen and (max-width: 575px) {
        border-radius: 2.5vw;
    }
`



const OpportunitiesTitle = styled.h2`
    color: var(--granich-black);
    font-size: 4.5vw;
    letter-spacing: -0.2vw;
    font-weight: 700;
    line-height: 0.8;
    margin-bottom: 2.7vw;
    span {
        font-weight: inherit;
        position: relative;
        font-family: EB Garamond;
        font-style: italic;
        font-weight: 500;
        font-size: 6vw;
        letter-spacing: -0.2vw;
    }
    @media only screen and (max-width: 575px) {
        font-size: 11vw;
        letter-spacing: -0.7vw;
        line-height: 1;
        margin-bottom: 7vw;
        width: 100%;
        span {
            font-size: 13vw;
        }
        ${props => props.masterClass && `
            width: 100%;
        `}
    }
`

const OpportunitiesList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.65vw;
    grid-row-gap: 1.65vw;

    @media only screen and (max-width: 575px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 3vw;
        grid-row-gap: 3vw;
        margin-bottom: 3vw;
    }
`

const OpportunitiesSectionWrapper = styled.div`
    // background: #dedede;
    
    // padding: 3vw;
    margin-bottom: 2vw;
    border-radius: 0.6vw;
    @media only screen and (max-width: 575px) {
        // padding: 6vw;
        margin-bottom: 5vw;
    }
`

const OpportunityWrapper = styled.div`
    background: white;
    background: #f2f2f2;
    border-radius: 0.5vw;
    // box-shadow: 0.1vw 0 0.5vw rgba(0,0,0,0.15);
    display: flex;
    flex-direction: column;
    background: white;
    // padding: 1.5vw;
    @media only screen and (max-width: 575px) {
        border-radius: 1.5vw;
        // box-shadow: 0.4vw 0.4vw 1.5vw rgba(0,0,0,0.15);
        display: flex;
    }

`

const OpportunityTag = styled.div`
    border: 1px solid  var(--granich-black);
    border-radius: 100vw;
    transition: all 0.2s ease;
    font-size: 1.37vw;
    padding: 0.15vw 0.7vw 0.15vw;
    margin-right: 0.5vw;
    margin-bottom: 0.5vw;
    // color: var(--granich-light-grey);
    color: var(--granich-black);

    display: inline-flex;
    align-items: center;
    user-select: none;
    font-weight: 500;
    :last-child {
        margin-right: 0;
    }

    @media only screen and (max-width: 575px) {
        font-size: 3vw;
        padding: 0.3vw 1.7vw;
        margin-right: 1.5vw;
        margin-bottom: 1.5vw;
        letter-spacing: -0.05vw;

    }
`

// const OpportunityButton = styled.a`
//     padding: 1vw 2.5vw;
//     display: flex;
//     background: #f2f2f2;
//     width: 100%;
//     border-radius: 0 0 0.5vw 0.5vw;

//     transition: all 0.2s ease;
//     align-items: center;
//     span {
//         color: var(--granich-light-grey);
//         display: inline-block;
//         border-bottom: 1.5px dotted var(--granich-light-grey);
//         padding-bottom: 0.1vw;
//         font-size: 1.05vw;
//     }
//     :hover {
//         cursor: pointer;
//         span{
//             border-bottom: 1.5px dotted #f2f2f2;
//         }
//     }
//     @media only screen and (max-width: 575px) {
//         padding: 2.5vw 8.8vw 3.5vw;
//         border-radius: 0 0 1.5vw 1.5vw;
//         span {
//             padding-bottom: 0.1vw;
//             font-size: 3.7vw;
//         }
//     }
// `



const OpportunityText = styled.div`
    margin-left: auto;
    
    display: flex;
    // padding: 1.2vw 0 0vw;
    // background: #f2f2f2;
    border-radius: 0 0 0.5vw 0.5vw;
    padding: 0.5vw 2vw 2vw;


    width: 100%;
    font-weight: 500;
    // margin-top: auto;
    height: 100%;
    // background: white;

    
    span {

        font-size: 1.3vw;
        // padding-left: 0.5vw;
        color: var(--granich-grey);
        // color: var(--granich-black);
        line-height: 1.3;
    }



    @media only screen and (max-width: 575px) {
        margin-top: 1vw;
        padding: 0.5vw 2.5vw 2vw;
    }
`

const OpportunityImage = styled(props => <BackgroundImage {...props}></BackgroundImage>)`
    height: 26vw;
    min-height: 26vw;
    overflow: hidden;
    background-size: 95%;
    background-color: white;
    border-radius: 0.5vw;
    overflow: hidden;
    @media only screen and (max-width: 575px) {
        height: 48vw;
        min-height: 48vw;
        border-radius: 1.5vw;
        background-size: 90% !important;
    }
`



// const OpportunitiesFooter = styled.div`
//     display: flex;
//     align-items: center;
//     // background: #dedede;
//     border-radius: 0.5vw;
//     // padding: 1vw 3vw;
//     @media only screen and (max-width: 575px) {
//         border-radius: 1.5vw;
//         padding: 5vw 3vw 10vw;
//         flex-direction: column;
//         ${props => props.masterClass && `
//             padding: 5vw;
//         `}
//     }
// `




const OpportunitiesSubtitle = styled.div`
    font-size: 1.55vw;
    font-weight: 600;
    margin-bottom: 1.5vw;
    @media only screen and (max-width: 575px) {
        font-size: 4.5vw;
        margin-bottom: 3vw;
    }
`



const Opportunity = ({image, text}) => {
    return (
        <OpportunityWrapper>
            <OpportunityImage fluid={image}></OpportunityImage>
            <OpportunityText>
                <span>{text}</span>
            </OpportunityText> 
        </OpportunityWrapper>
    )
}


const CourseOpportunities = () => {
    const dataImage = useStaticQuery(graphql`
        query opportunitiesImages {
            opportunitiesImage1: file(relativePath: { eq: "graph-design/opportunities/opportunities-01.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            opportunitiesImage2: file(relativePath: { eq: "graph-design/opportunities/opportunities-02.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            opportunitiesImage3: file(relativePath: { eq: "graph-design/opportunities/opportunities-03.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            opportunitiesImage4: file(relativePath: { eq: "graph-design/opportunities/opportunities-04.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            opportunitiesImage5: file(relativePath: { eq: "graph-design/opportunities/opportunities-05.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            opportunitiesImage6: file(relativePath: { eq: "graph-design/opportunities/opportunities-06.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 300) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const image1 = dataImage.opportunitiesImage1.childImageSharp.fluid;
    const image2 = dataImage.opportunitiesImage2.childImageSharp.fluid;
    const image3 = dataImage.opportunitiesImage3.childImageSharp.fluid;
    const image4 = dataImage.opportunitiesImage4.childImageSharp.fluid;
    const image5 = dataImage.opportunitiesImage5.childImageSharp.fluid;
    const image6 = dataImage.opportunitiesImage6.childImageSharp.fluid;


    return (
        <OpportunitiesSection>
            <Container>
                <OpportunitiesWrapper>

                    <OpportunitiesTitle>После курса вы сможете <span>выполнять заказы</span> на дизайн и вёрстку:</OpportunitiesTitle>
                    <OpportunitiesSectionWrapper>
                        <OpportunitiesSubtitle>Одностраничные макеты:</OpportunitiesSubtitle>
                        <OpportunitiesList>
                            <Opportunity text={(<><OpportunityTag>Плакаты</OpportunityTag><OpportunityTag>Афиши</OpportunityTag><OpportunityTag>Флаеры</OpportunityTag><OpportunityTag>Буклеты</OpportunityTag></>)} image={image1}/>
                            <Opportunity text={(<><OpportunityTag>Сторис</OpportunityTag><OpportunityTag>Обложки постов</OpportunityTag></>)} image={image2}/>
                            <Opportunity text={(<><OpportunityTag>Баннеры на сайты</OpportunityTag><OpportunityTag>Оформление соцсетей</OpportunityTag></>)} image={image3}/>
                        </OpportunitiesList>
                    </OpportunitiesSectionWrapper>
                    <OpportunitiesSectionWrapper>
                        <OpportunitiesSubtitle>Многостраничные макеты:</OpportunitiesSubtitle>
                        <OpportunitiesList>
                            <Opportunity text={(<><OpportunityTag>Журналы</OpportunityTag><OpportunityTag>Книги</OpportunityTag><OpportunityTag>Брошюры</OpportunityTag></>)} image={image4}/>
                            <Opportunity text={(<><OpportunityTag>Презентации</OpportunityTag></>)} image={image5}/>
                            <Opportunity text={(<><OpportunityTag>Карусели</OpportunityTag></>)} image={image6}/>
                        </OpportunitiesList>
                    </OpportunitiesSectionWrapper>
                    

                </OpportunitiesWrapper>
            </Container>
        </OpportunitiesSection>
    )
}

export default CourseOpportunities
