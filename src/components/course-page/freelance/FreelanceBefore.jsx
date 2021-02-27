import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import FreelanceBeforeClip from '../../../assets/svgs/freelance/freelance-background-before-clip.svg';
import FreelanceBeforeClipMobile from '../../../assets/svgs/freelance/freelance-background-before-clip-mobile.svg';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';


const FreelanceBeforeSection = styled.section`
    position: relative;
    z-index: 1;
`
const FreelanceBeforeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: black;
    justify-content: space-between;
    padding: 1vw 12vw 2.5vw 19.5vw;
    position: relative;   
    margin-top: -0.5vw;
    @media only screen and (max-width: 575px) {
        padding: 6vw 6vw 85vw;

    }
`


const FreelanceBeforeSvgClip = styled(props => <FreelanceBeforeClip {...props} />)`
    position: relative;
    display: block;
    width: 100%;
    z-index: 0;
    background-size: 'cover';
    background-repeat: 'no-repeat';
    margin-top: -1vw;
    @media only screen and (max-width: 575px) {
        display: none;
    }
`

const FreelanceBeforeSvgClipMobile = styled(props => <FreelanceBeforeClipMobile {...props} />)`
    position: relative;
    display: none;
    width: 100%;
    z-index: 0;
    background-size: 'cover';
    background-repeat: 'no-repeat';
    margin-top: -1vw;
    @media only screen and (max-width: 575px) {
        display: block;
    }
`


const FreelanceBeforeImage = styled(props => <Img {...props} />)`
    width: 17vw;
    position: absolute;
    top: 0;
    left: 3.5vw;
    transform: rotate(15deg);
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        width: 60vw;
        top: auto;
        bottom: 5vw;
        left: 50%;
        transform: translateX(-50%);
    }
`

const FreelanceBeforeInfo = styled.div`

`
const FreelanceBeforeTitle = styled.div`
    font-size: 3.45vw;
    color: var(--granich-red);
    font-weight: 200;
    letter-spacing: -0.1vw;
    margin-bottom: 1vw;
    @media only screen and (max-width: 575px) {
        font-size: 6vw;
    }
`
const FreelanceBeforeDescr = styled.div`
    color: var(--granich-grey);
    font-size: 2vw;
    line-height: 1.3;
    font-weight: 200;
    padding-right: 1vw;
    // letter-spacing: 0.05vw;
    @media only screen and (max-width: 575px) {
        font-size: 4.5vw;
    }
`

const FreelanceBefore = () => {

    const data = useStaticQuery(graphql`
        query FreelanceBeforeSectionQuery {
            freelanceBeforeSpider: file(relativePath: { eq: "freelance/spider.png" }) {
                childImageSharp {
                    fluid(maxWidth: 450, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const spider = data.freelanceBeforeSpider.childImageSharp.fluid

    return (
        <FreelanceBeforeSection>
            <Container>
                <FreelanceBeforeWrapper>
                    <FreelanceBeforeImage style={{ position: 'absolute' }} fluid={spider} />
                    <FreelanceBeforeInfo>
                        <FreelanceBeforeTitle>
                            До Осознанного Фриланса
                        </FreelanceBeforeTitle>
                        <FreelanceBeforeDescr>
                            Клиенты это странные люди — у них невнятные запросы, необоснованные правки, отсутствует чувство прекрасного. А ведь ещё и новых клиентов тяжело искать. Ну нафиг, проще в найм пойти.
                        </FreelanceBeforeDescr>
                    </FreelanceBeforeInfo>
                </FreelanceBeforeWrapper>
                <FreelanceBeforeSvgClip />
                <FreelanceBeforeSvgClipMobile />
            </Container>
        </FreelanceBeforeSection>
    )
}

export default FreelanceBefore
