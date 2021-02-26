import React from 'react'
import styled from 'styled-components';
import FreelanceLogoIcon from '../../../assets/svgs/freelance/freelance-logo.svg';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const FreelanceLogo = styled(props => <FreelanceLogoIcon {...props} />)`
    max-width: 12vw;
    margin-right: 1.6vw;
`


const LabelWrapper = styled.div`
    // padding: 1vw;
    display: flex;
    align-items: center;
    margin-bottom: 0.7vw;
    // justify-content: space-between;
    // width: 10vw;
`

const LabelDescr = styled.div`
    // width: 30vw;
    font-size: 1.75vw;
    font-weight: 200;
    letter-spacing: 0;
    margin-right: 2.7vw;
    margin-top: -0.3vw;
`

const LabelTagsWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const LabelTag = styled.div`
    display: flex;
    padding: 0.3vw 0.5vw;
    box-shadow: 0 0.2vw 0.3vw rgba(0,0,0,0.1);
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100vw;
    margin-right: 0.7vw;
    margin-bottom: 0.7vw;
    font-size: 0.8vw;
    align-items: center;
    @media only screen and (max-width: 575px) {
        padding: 1.5vw 2.1vw;
        font-size: 3.45vw;
        margin-right: 2vw;
        margin-bottom: 3vw;
        box-shadow: 0 1vw 1.5vw rgba(0,0,0,0.1);
    }
`

const LabelCheckIcon = styled(props => <Img {...props} />)`
    width: 0.7vw;
    height: 0.7vw;
    margin-right: 0.3vw;
    @media only screen and (max-width: 575px) {
        width: 2.8vw;
        height: 2.8vw;
        margin-right: 1.5vw;
    }
`

const FreelancePresentationLabel = () => {


    const data = useStaticQuery(graphql`
        query FreelancePresentationQuery {
            freelancePresentationCheckIcon: file(relativePath: { eq: "check-icon1.png" }) {
                childImageSharp {
                    fluid(maxWidth: 98, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    const checkIcon = data.freelancePresentationCheckIcon.childImageSharp.fluid

    const tags = ['Дизайнерам', 'Фотографам', '2D-аниматорам', 'Иллюстраторам', 'Видеомейкерам', '3D-моделлерам']

    return (
        <LabelWrapper>
            <FreelanceLogo />
            <LabelDescr>Курс-наставничество для творческих специалистов</LabelDescr>
            <LabelTagsWrapper>
                {tags.map((tag, idx) => (
                    <LabelTag key={`${tag}-${idx}`}>
                        <LabelCheckIcon fluid={checkIcon} />
                        {tag}
                    </LabelTag>
                ))}
            </LabelTagsWrapper>
        </LabelWrapper>
    )
}

export default FreelancePresentationLabel
