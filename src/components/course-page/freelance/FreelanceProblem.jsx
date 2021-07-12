import React from "react"
import { Container } from "../../style"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import FrameIcon from "../../../assets/svgs/freelance/frame.svg"
import SmileIcon from "../../../assets/svgs/freelance/smile.svg"
import SectionSeparatorIcon from "../../../assets/svgs/freelance/section-separator.svg"
import SectionSeparatorMobileIcon from "../../../assets/svgs/freelance/section-separator-mobile.svg"

const SectionSeparator = styled(props => <SectionSeparatorIcon {...props} />)`
  width: 100%;
  display: block;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const SectionSeparatorMobile = styled(props => (
  <SectionSeparatorMobileIcon {...props} />
))`
  width: 100%;
  display: none;
  @media only screen and (max-width: 575px) {
    display: block;
  }
`

const Frame = styled(props => <FrameIcon {...props} />)`
  width: 13vw;
  margin-right: 3.5vw;
  transform: translateY(-10%);
  @media only screen and (max-width: 575px) {
    width: 18vw;
    min-width: 18vw;
    transform: none;
  }
`

const Smile = styled(props => <SmileIcon {...props} />)`
  width: 13vw;
  margin-right: 3.5vw;
  transform: scale(0.9);
  @media only screen and (max-width: 575px) {
    width: 18vw;
    min-width: 18vw;
  }
`

const ProblemSection = styled.div``

const ProblemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 3vw 0vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 6vw 0vw 0;
  }
`

const ProblemTitle = styled.h2`
  padding-left: 4vw;
  font-size: 6.6vw;
  letter-spacing: -0.12vw;
  font-weight: 800;
  width: 90%;
  line-height: 0.92;
  position: relative;
  margin-bottom: 7vw;
  :before {
    content: "“";
    font-size: 7vw;
    position: absolute;
    top: -0.5vw;
    left: -0.4vw;
    color: var(--granich-red);
  }
  @media only screen and (max-width: 575px) {
    width: 95%;
    font-size: 8vw;
    line-height: 1.1;
    :before {
      font-size: 9vw;
      top: -1.5vw;
      left: -0.1vw;
    }
  }
`

const ProblemList = styled.div`
  margin-bottom: 5.5vw;
  padding: 0 6vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 12vw;
  }
`

const ProblemItem = styled.div`
  display: flex;
  margin-bottom: 5.5vw;
  :last-child {
    margin-bottom: 0;
  }
  @media only screen and (max-width: 575px) {
    align-items: flex-start;
  }
`

const ProblemItemText = styled.div`
  width: 42vw;
  color: var(--granich-grey);
  font-size: 2vw;
  line-height: 1.3;
  font-weight: 200;
  line-height: 1.35;
  letter-spacing: -0.015rem;
  @media only screen and (max-width: 575px) {
    width: auto;
    font-size: 3.7vw;
    font-weight: 400;
  }
`

const AuthorIntrodunction = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 3vw 0 3vw 6.3vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    padding: 10vw 0;
  }
`

const AuthorIntrodunctionImage = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 11vw;
  height: 11vw;
  min-width: 11vw;
  min-height: 11vw;
  border-radius: 100vw;
  overflow: hidden;
  margin-right: 2.2vw;
  @media only screen and (max-width: 575px) {
    width: 30vw;
    height: 30vw;
    min-width: 30vw;
    min-height: 30vw;
    margin-bottom: 3vw;
    margin-right: 0;
  }
`

const AuthorIntrodunctionInfo = styled.div`
  margin-top: 1vw;
`

const AuthorIntrodunctionName = styled.div`
  color: var(--granich-black);
  font-size: 2.05vw;
  margin-bottom: 1.2vw;
  span {
    display: block;
    font-weight: 800;
  }
  @media only screen and (max-width: 575px) {
    text-align: center;
    font-size: 4vw;
    margin-bottom: 3vw;
  }
`
const AuthorIntrodunctionAchievementList = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    text-align: center;
  }
`

const AuthorIntrodunctionAchievementItem = styled.div`
  color: var(--granich-grey);
  font-size: 1.25vw;
  line-height: 1.3;
  margin-right: 2vw;
  width: 17vw;
  :nth-child(2) {
    margin-right: 2vw;
  }
  :last-child {
    margin-right: 0;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    width: 50%;
    margin: 0 auto;
    margin-bottom: 3vw;
    :nth-child(2) {
      margin: 0 auto;
      margin-bottom: 3vw;
    }
    :last-child {
      margin: 0 auto;
    }
  }
`

const FreelanceProblem = () => {
  const data = useStaticQuery(graphql`
    query FreelanceProblemSectionQuery {
      freelanceProblemAuthor: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const author = data.freelanceProblemAuthor.childImageSharp.fluid

  return (
    <ProblemSection>
      <Container>
        <ProblemWrapper>
          <SectionSeparator />
          <SectionSeparatorMobile />
          <AuthorIntrodunction>
            <AuthorIntrodunctionImage fluid={author}></AuthorIntrodunctionImage>
            <AuthorIntrodunctionInfo>
              <AuthorIntrodunctionName>
                <span>Вадим Гранич</span>
                Автор Осознанного Фриланса
              </AuthorIntrodunctionName>
              <AuthorIntrodunctionAchievementList>
                <AuthorIntrodunctionAchievementItem>
                  Основатель онлайн-школы Granich для дизайнеров
                </AuthorIntrodunctionAchievementItem>
                <AuthorIntrodunctionAchievementItem>
                  Выпускник Высшей школы менеджмента СПбГУ
                </AuthorIntrodunctionAchievementItem>
                <AuthorIntrodunctionAchievementItem>
                  Опыт в продажах — Сбербанк, LoyaltyPlant, QB Finance
                </AuthorIntrodunctionAchievementItem>
              </AuthorIntrodunctionAchievementList>
            </AuthorIntrodunctionInfo>
          </AuthorIntrodunction>
          <ProblemTitle>
            Творцы работают на бизнес клиента, но не понимают его
          </ProblemTitle>
          <ProblemList>
            <ProblemItem>
              <Frame />
              <ProblemItemText>
                Это ваша проблема — вы не видите полной картины того, как ваше
                творчество помогает реализовать бизнес-стратегию заказчиков, и
                какие выгоды это приносит.
              </ProblemItemText>
            </ProblemItem>
            <ProblemItem>
              <Smile />
              <ProblemItemText>
                Поэтому вам тяжело работать на себя. Осознанный Фриланс
                направлен на то, чтобы вы, как творческий специалист, начали
                говорить на языке бизнеса
              </ProblemItemText>
            </ProblemItem>
          </ProblemList>
          <SectionSeparator />
          <SectionSeparatorMobile />
        </ProblemWrapper>
      </Container>
    </ProblemSection>
  )
}

export default FreelanceProblem
