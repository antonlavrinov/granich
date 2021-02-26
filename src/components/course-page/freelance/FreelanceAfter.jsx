import React from 'react'
import { Container } from '../../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';


const FreelanceAfterSection = styled.section`

`
const FreelanceAfterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: space-between;
    padding: 4.6vw 9vw 4vw 19.5vw;
    position: relative;
    margin-top: -1.6vw;
    
    @media only screen and (max-width: 575px) {

        padding: 6vw 6vw 6vw;

    }
`




const FreelanceAfterImage = styled(props => <Img {...props} />)`
    width: 18vw;
    position: absolute;
    top: 2.4vw;
    left: 2vw;
    margin-right: 0.5vw;
    @media only screen and (max-width: 575px) {
        width: 2.8vw;
        height: 2.8vw;
        margin-right: 1.5vw;
    }
`

const FreelanceAfterInfo = styled.div`
    position: relative;
`
const FreelanceAfterTitle = styled.div`
    font-size: 4.1vw;
    font-family: EB Garamond;
    font-style: italic;
    font-weight: 200;
    letter-spacing: -0.1vw;
    margin-bottom: 1vw;
`
const FreelanceAfterDescr = styled.div`

    color: var(--granich-grey);
    font-size: 2vw;
    line-height: 1.3;
    font-weight: 200;
    letter-spacing: 0.04vw;

`

const FreelanceAfter = () => {

    const data = useStaticQuery(graphql`
        query FreelanceAfterSectionQuery {
            freelanceAfterBanzai: file(relativePath: { eq: "freelance/freelance-banzai.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }

        }
    `)

    const banzai = data.freelanceAfterBanzai.childImageSharp.fluid

    return (
        <FreelanceAfterSection>
            <Container>
                <FreelanceAfterWrapper>
                    <FreelanceAfterImage style={{ position: 'absolute' }} fluid={banzai} />
                    <FreelanceAfterInfo>
                        <FreelanceAfterTitle>
                            После Осознанного Фриланса
                        </FreelanceAfterTitle>
                        <FreelanceAfterDescr>
                            Оказывается клиенты адекватные, можно ясно понимать их запросы и давать им ровно то, что они хотят. Ура, моя работа стала востребована. Теперь я понимаю, что фриланс это стабильный источник дохода.
                        </FreelanceAfterDescr>
                    </FreelanceAfterInfo>
                </FreelanceAfterWrapper>

            </Container>
        </FreelanceAfterSection>
    )
}

export default FreelanceAfter
