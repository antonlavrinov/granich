import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import Img from "gatsby-image"
import CourseArrowOut from "../../assets/svgs/course-arrow-out.svg"

const BannerSection = styled.div`
  margin-bottom: 1.7vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

const BannerWrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 1.5vw 2.5vw 1.5vw 15.8vw;
  position: relative;
  display: flex;
  box-shadow: 0.25vw 0.15vw 0.4vw rgba(0, 0, 0, 0.1);
  @media only screen and (max-width: 575px) {
    padding: 6vw 6.6vw 6.6vw;
    border-radius: 2.5vw;
    box-shadow: 0 0 1.8vw rgba(0, 0, 0, 0.15);
  }
`

const BannerContentWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const BannerImage = styled.img`
  width: 9.8vw;
  bottom: 0;
  left: 3.1vw;
  @media only screen and (max-width: 575px) {
    left: auto;
    right: 7vw;
    width: 20vw;
  }
`

const BannerCourseMobileStart = styled.div`
  display: none;
  margin-right: 0.8vw;
  letter-spacing: -0.01vw;
  font-weight: 500;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    line-height: 1.4;
    display: block;
  }
`

const BannerCourseButton = styled.a`
  display: inline-flex;
  align-items: center;
  color: white;
  background: var(--granich-red-gradient-horizontal);
  margin-left: auto;
  padding: 0.8vw 1.4vw 1vw 1.4vw;
  letter-spacing: 0.06vw;
  border-radius: 0.3vw;
  font-size: 1.5vw;
  font-weight: 400;
  transition: all 0.2s ease;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  white-space: nowrap;

  svg {
    width: 0.9vw;
    height: 0.9vw;
    margin-left: 0.5vw;
    margin-top: 0.2vw;
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    color: white;
    font-size: 1.5vw;
    font-weight: 400;
    letter-spacing: 0.05vw;
  }

  @media only screen and (max-width: 575px) {
    margin-left: 0;
    font-size: 4.3vw;
    padding: 3vw 5vw;
    border-radius: 1.5vw;
    margin-right: 4.5vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
    :hover {
      font-size: 4.3vw;
      transform: none;
    }
    svg {
      width: 3vw;
      height: 3vw;
      margin-left: 1.2vw;
      margin-top: 0.8vw;
    }
  }
  ${props =>
    props.type === "Мастер-класс" &&
    `
        padding: 0.8vw 3vw 1vw;
        @media only screen and (max-width: 575px) {
            padding: 3vw 10vw;
        }
    `}
  ${props =>
    props.status &&
    `
        background: var(--granich-black-gradient);
    `}
`

const BannerCourseButtonDevelopment = styled.div`
  display: inline-flex;
  color: white;
  background: var(--granich-black-gradient);
  padding: 0.8vw 1.4vw 1vw 1.4vw;
  border-radius: 0.3vw;
  font-size: 1.5vw;
  font-weight: 400;
  user-select: none;
  box-shadow: 0.25vw 0.25vw 0.4vw rgba(0, 0, 0, 0.25);
  letter-spacing: 0.05vw;
  @media only screen and (max-width: 575px) {
    font-size: 4.3vw;
    padding: 3vw 5vw;
    border-radius: 1.5vw;
    margin-right: 4.5vw;
    box-shadow: 0.7vw 0.7vw 1.5vw rgba(0, 0, 0, 0.3);
  }
`

const BannerContentMain = styled.div`
  padding-right: 1vw;
  line-height: 1.45;
  font-size: 1.4vw;
  font-weight: 500;
  i {
    font-size: 2vw;
    line-height: 0;
    font-family: EB Garamond;
  }
  span {
    display: inline;
    color: var(--granich-red);
    position: relative;
    left: 0.5vw;
  }
  div {
    display: none;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    i {
      font-size: 5vw;
    }
    span {
      display: none;
    }
    div {
      display: inline;
      position: relative;
      left: 1vw;
      color: var(--granich-red);
    }
    margin-bottom: 3vw;
  }
`

const BannerContentButton = styled.div`
  margin-left: auto;

  @media only screen and (max-width: 575px) {
    margin-left: 0;
    display: flex;
  }
`

const Banner = ({ data, text }) => {
  return (
    <BannerSection>
      <Container>
        <BannerWrapper>
          <BannerImage
            style={{ position: "absolute" }}
            src="/images/course-banner.png"
          />
          <BannerContentWrapper>
            <BannerContentMain>{text}</BannerContentMain>
            <BannerContentButton>
              {data.courseTypeEmpty ? (
                <BannerCourseButtonDevelopment>
                  В разработке
                </BannerCourseButtonDevelopment>
              ) : (
                <>
                  {data.courseType === "Курс" ? (
                    <BannerCourseButton
                      status={!data.courseStatus}
                      target="_blank"
                      href={`/${data.courseSlug}`}
                    >
                      {data.courseStatus ? "Участвовать" : "Узнать о наборе"}{" "}
                      <CourseArrowOut />
                    </BannerCourseButton>
                  ) : (
                    <BannerCourseButton
                      status={!data.courseStatus}
                      target="_blank"
                      href={`/${data.courseSlug}`}
                      type={data.courseType}
                    >
                      {data.courseStatus ? "Купить" : "Предзаказ"}{" "}
                      <CourseArrowOut />
                    </BannerCourseButton>
                  )}
                </>
              )}
            </BannerContentButton>
          </BannerContentWrapper>
        </BannerWrapper>
      </Container>
    </BannerSection>
  )
}

export default Banner
