import React from "react"
import { Container } from "../../style"
import styled from "styled-components"
import ExampleArrowIcon from "../../../assets/svgs/graph-design/graph-design-example-arrow.svg"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import LongArrowMobileIcon from "../../../assets/svgs/graph-design/graph-design-long-arrow-mobile.svg"

const CourseExampleSection = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`
const CourseExampleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  justify-content: space-between;
  padding: 4vw 4.2vw 4vw 4.2vw;
  border-radius: 0.6vw;

  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 6vw 6vw 6vw;
  }
`

const ExampleArrow = styled(props => <ExampleArrowIcon {...props} />)`
  width: 13vw;
  height: 2.2vw;
  margin: 0 auto;
  margin-top: 2vw;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const LongArrowMobile = styled(props => <LongArrowMobileIcon {...props} />)`
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
    height: 50vw !important;
    fill: var(--granich-black);
    margin-bottom: 2vw;
    margin-top: 2vw;
  }
`

const CourseExampleHeader = styled.div`
  display: flex;
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 5vw;
  }
`
const CourseExampleAuthor = styled.div`
  /* width: 20vw; */
  margin-right: 2.5vw;
  margin-right: 3.5vw;
  line-height: 1.4;
  @media only screen and (max-width: 575px) {
    margin-right: 0;
    min-width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3.5vw;
  }
`

const CourseExampleAuthorImage = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 11vw;
  height: 11vw;
  border-radius: 100vw;
  margin-bottom: 1vw;
  overflow: hidden;
  @media only screen and (max-width: 575px) {
    width: 15vw;
    height: 15vw;
    width: 23vw;
    height: 23vw;
  }
`
const CourseExampleAuthorName = styled.div`
  font-size: 1.15vw;
  margin-left: 1.2vw;
  font-weight: 500;
  @media only screen and (max-width: 575px) {
    font-size: 5vw;
    margin-left: 0;
    font-size: 3.7vw;
    margin-top: 1.5vw;
  }
`

const CourseExampleAuthorText = styled.div`
  font-size: 1.15vw;
  color: var(--granich-grey);
  margin-left: 1.2vw;
  @media only screen and (max-width: 575px) {
    font-size: 5vw;
    margin-left: 0;
    font-size: 3.7vw;
  }
`

const CourseExampleTitle = styled.h2`
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  /* font-size: 5.4vw; */
  font-size: 6vw;
  text-align: left;
  // width: 600px;
  line-height: 1.04;
  position: relative;
  margin-top: 0.5vw;
  // margin-bottom: 50px;
  // margin-left: 15px;
  /* :after {
    content: "»";
    margin-left: 0.2vw;
    margin-top: 0.1vw;
    position: absolute;
    font-size: 5vw;
  }
  :before {
    content: "«";
    position: absolute;
    font-size: 5vw;
    top: 0.2vw;
    left: -3vw;
  } */
  @media only screen and (max-width: 575px) {
    font-size: 7.4vw;
    margin-top: 0;
    margin-left: 0;
    letter-spacing: -0.1vw;
    text-align: center;
    /* :after {
      margin-left: 0.2vw;
      margin-top: 0.1vw;
      font-size: 7.4vw;
    }
    :before {
      position: relative;
      font-size: 5vw;
      top: 0.2vw;
      left: -0.5vw;
      font-size: 7.4vw;
    } */
  }
`

const CourseExampleInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
  }
`
const CourseExampleImage = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 100%;
  height: 11.25vw;
  margin-bottom: 0;
  background-size: cover;
  background-size: auto 100%;
  @media only screen and (max-width: 575px) {
    height: 29.5vw;
    margin-top: 8vw;
  }
`

const CourseExampleInfoBlock = styled.div`
  width: 50%;
  @media only screen and (max-width: 575px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
    :first-child {
      flex-direction: column-reverse;
    }
  }
`
const CourseExampleInfoText = styled.div`
  color: var(--granich-grey);
  font-size: 1.15vw;
  line-height: 1.45;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
  }
`

const CourseExampleImageLine = styled.div`
  width: 1.5px;
  background: rgba(0,0,0,0.1);
  margin: 0 2vw;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const FoundationExample = () => {
  const data = useStaticQuery(graphql`
    query foundationExampleSectionQuery {
      foundationAuthor: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foundationExample1: file(
        relativePath: { eq: "graph-design/example/example-01.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foundationExample2: file(
        relativePath: { eq: "graph-design/example/example-02.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.foundationAuthor.childImageSharp.fluid

  return (
    <CourseExampleSection>
      <Container>
        <CourseExampleWrapper>
          <CourseExampleHeader>
            <CourseExampleAuthor>
              <CourseExampleAuthorImage
                style={{ backgroundSize: "cover" }}
                fluid={imageData}
              />
              <CourseExampleAuthorName>Вадим Гранич</CourseExampleAuthorName>
              <CourseExampleAuthorText>автор курса</CourseExampleAuthorText>
            </CourseExampleAuthor>
            {/* <CourseExampleTitle>
                            На курсе мы разложим знания по полочкам
                        </CourseExampleTitle> */}
            <CourseExampleTitle>
                Что за дизайн-система Курса?
            </CourseExampleTitle>
          </CourseExampleHeader>
          <CourseExampleInfoWrapper>
            <CourseExampleInfoBlock>
              <CourseExampleImage fluid={data.foundationExample2.childImageSharp.fluid} />
              <CourseExampleInfoText>
                Вы кое-что слышали о шрифтах. Знакомы с цветом. Пользовались
                jpeg. Возможно, даже делали свои макеты. Но упорядочены ли ваши
                знания? Не важно, начинаете вы с нуля или у вас уже есть
                какой-то опыт — знания требуют структурности.
              </CourseExampleInfoText>
            </CourseExampleInfoBlock>
            <LongArrowMobile />
            <CourseExampleImageLine />

            <CourseExampleInfoBlock>
              <CourseExampleImage fluid={data.foundationExample2.childImageSharp.fluid} />
              <CourseExampleInfoText>
                И вот здесь вы по-настоящему оцените дизайн‑систему Курса. Это 6 элементов дизайна (визуальная эффектность) и 3 принципа вёрстки (визуальная функциональность). Благодаря им вы будете точно понимать из чего состоят и как устроены ваши макеты. Вы почувствуете уверенность в себе, а ваша команда и клиенты это оценят.
              </CourseExampleInfoText>
            </CourseExampleInfoBlock>
          </CourseExampleInfoWrapper>
          <ExampleArrow />
        </CourseExampleWrapper>
      </Container>
    </CourseExampleSection>
  )
}

export default FoundationExample
