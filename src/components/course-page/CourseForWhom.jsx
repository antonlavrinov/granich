import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import BackgroundImage from "gatsby-image";
import { graphql, useStaticQuery } from 'gatsby'




const ForWhomSection = styled.section`
    margin-bottom: 5vw;
`

const ForWhomSectionTitle = styled.div`
    font-size: 4.55vw;
    font-weight: 700;
    letter-spacing: -0.2vw;
    margin-bottom: 2.4vw;
`

const ForWhomWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;

`

const ForWhomBlockWrapper = styled.div`
    background: white;
    padding: 1.8vw;
    border-radius: 0.5vw;

`
const ForWhomBlockTitle = styled.div`
    font-size: 1.5vw;
    line-height: 0.8;
    text-align: center;
    font-family: EB Garamond;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.7vw;
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
`
const ForWhomBlockImage = styled(props => <BackgroundImage {...props}/>)`
    background: url(${props => props.image}) center center no-repeat;
    background-size: 90%;
    width: 100%;
    height: 19.4vw;
    border-radius: 0.2vw;
    margin-bottom: 2vw;
`
const ForWhomBlockTextBlock = styled.div`
    font-size: 1.2vw;
    color: var(--granich-grey);
    letter-spacing: -0.02vw;
    line-height: 1.3;
    margin-left: -0.1vw;
`



const ForWhomBlock = ({image, title, text }) => {

    return (
        <ForWhomBlockWrapper>
            <ForWhomBlockTitle>{title}</ForWhomBlockTitle>
            <ForWhomBlockImage fluid={image}/>
            <ForWhomBlockTextBlock>
                {text}
            </ForWhomBlockTextBlock>
        </ForWhomBlockWrapper> 
    )
}

const CourseForWhom = () => {
    const data = useStaticQuery(graphql`
        query {
            image1 : file(relativePath: { eq: "graph-design/for-whom/for-whom-01.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            image2 : file(relativePath: { eq: "graph-design/for-whom/for-whom-02.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            image3 : file(relativePath: { eq: "graph-design/for-whom/for-whom-03.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `
    )
    const image1 = data.image1.childImageSharp.fluid
    const image2 = data.image2.childImageSharp.fluid
    const image3 = data.image3.childImageSharp.fluid
    return (
        <ForWhomSection>
            <Container>
                <ForWhomSectionTitle>
                    Для кого курс?
                </ForWhomSectionTitle>
                <ForWhomWrapper>
                    <ForWhomBlock image={image1}
                                  title="Нужен навык"
                                  text="Знания с курса станут навыком. Вы сможете выполнять заказы на печатную продукцию (визитки, постеры, журналы) и на электронные макеты"
                    
                    />
                    <ForWhomBlock image={image2}
                                  title="Ищете себя"
                                  text="Недавно уволились из офиса? Устали от кадастрового кадастра? Хотите понять, интересно ли вам будет строить карьеру в дизайне? У меня, за 2 интенсивных месяца, точно поймете."
                    
                    />
                    <ForWhomBlock image={image3}
                                  title="Управленец"
                                  text="Часто ставите задачи дизайнерам? Хотите лучше понимать их мир? Я преподнесу вам язык дизайна. Постановка задач станет проще"
                    
                    />
                </ForWhomWrapper>
            </Container>
        </ForWhomSection>
    )
}

export default CourseForWhom
