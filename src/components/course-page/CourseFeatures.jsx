import React from 'react'
import { Container } from '../style';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import ArrowOut from '../../assets/svgs/header-arrow-icon-out.svg';


const ArrowLinkOut = styled(props => <ArrowOut {...props}/>)`
  position: absolute;
  top: -0.5vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: -1.6vw;
    right: -3.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }


`

const FeaturesSection = styled.section`
    margin-bottom: 50px;
`


const FeaturesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 1.5vw;
    grid-row-gap: 1.5vw;
`

const FeatureWrapper = styled.div`
    padding: 1vw;
    background: white;
    border-radius: 0.5vw;
    display: flex;
`

const FeatureText = styled.div`
    // font-size: 1vw;
    font-size: 1.15vw;
    font-size: 1.06vw;
    line-height: 1.3;
    color: var(--granich-grey);
    span {
        font-weight: 500;
        color: var(--granich-black);
    }
`

const FeatureLink = styled.a`
    font-weight: 500;
    color: var(--granich-black);
    border-bottom: 1px solid var(--granich-light-grey);
    position: relative;
    :hover {
        font-weight: 500;
        color: var(--granich-black);
        border-bottom: none;
    }
`

const FeatureImage = styled(props => <Img {...props}/>)`
    width: 5.4vw;
    min-width: 5.4vw;
    height: 5.4vw;
    margin-right: 1vw;
`

const Feature = ({image, title, text, link}) => {
    return (
        <FeatureWrapper>
            <FeatureImage fluid={image}/>
            <FeatureText>
                {link ? (
                    <FeatureLink href="https://my.readymag.com/edit/1982971/1/" target="_blank">{title}<ArrowLinkOut/></FeatureLink>
                ) : (
                    <span>{title}</span>
                )}

                <br/> {text}
            </FeatureText>
        </FeatureWrapper>
    )
}


const CourseFeatures = () => {
        const data = useStaticQuery(graphql`
        query FeaturesSectionQuery {
            books: file(relativePath: { eq: "graph-design/features/books.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            dizzySymbol: file(relativePath: { eq: "graph-design/features/dizzy-symbol.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            eyes: file(relativePath: { eq: "graph-design/features/eyes.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            handshake: file(relativePath: { eq: "graph-design/features/handshake.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            maleTeacher: file(relativePath: { eq: "graph-design/features/male-teacher.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            maleTechnologist: file(relativePath: { eq: "graph-design/features/male-technologist.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            movieCamera: file(relativePath: { eq: "graph-design/features/movie-camera.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            openBook: file(relativePath: { eq: "graph-design/features/open-book.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            signOfTheHorns: file(relativePath: { eq: "graph-design/features/sign-of-the-horns.png" }) {
                childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }


        }
    `)

    const books = data.books.childImageSharp.fluid;
    const dizzySymbol = data.dizzySymbol.childImageSharp.fluid;
    const eyes = data.eyes.childImageSharp.fluid;
    const handshake = data.handshake.childImageSharp.fluid;
    const maleTeacher = data.maleTeacher.childImageSharp.fluid;
    const maleTechnologist = data.maleTechnologist.childImageSharp.fluid;
    const movieCamera = data.movieCamera.childImageSharp.fluid;
    const openBook = data.openBook.childImageSharp.fluid;
    const signOfTheHorns = data.signOfTheHorns.childImageSharp.fluid;
    return (
        <FeaturesSection>
            <Container>
                <FeaturesWrapper>
                    <Feature image={maleTeacher} title="12 уроков" text="Плотно упакованы. Для каждого есть ДЗ. Смотреть можно в удобное время"/>
                    <Feature image={movieCamera} title="Видеоразборы" text="На каждое ДЗ. В среднем один разбор длится 15–30 минут"/>
                    <Feature image={maleTechnologist} title="Стримы" text="С Вадимом Граничем. Разбирём ваше портфолио, изучим дизайн-студии"/>
                    <Feature image={eyes} title="Видно ДЗ всех учеников" text="Это даёт вам дополнительную информацию для обучения"/>
                    <Feature image={handshake} title="Окружение" text="Закрытый чат в ТГ для общения с участниками и преподавателями курса"/>
                    <Feature image={dizzySymbol} title="Личное общение" text="С преподавателями по вашим макетам. Получите много обратной связи"/>
                    <Feature image={openBook} title="Изучим Adobe InDesign" text="Он заточен для работы с одно- и многостраничными проектами"/>
                    <Feature image={signOfTheHorns} link title="Послекурсовая поддержка" text="Дополнительное работа со старшим преподавателем Осознанного графдизайна"/>
                    <Feature image={books} title="Презентации графсистем" text="Вы получите восемь практических презентаций по исследованию графсистем"/>
                </FeaturesWrapper>
            </Container>
        </FeaturesSection>
    )
}

export default CourseFeatures
