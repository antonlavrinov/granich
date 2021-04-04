import React from "react"
import { Container } from "../../style"
import CourseArrowOut from "../../../assets/svgs/course-arrow-out.svg"
import * as SC from "./Banner"

type Props = {
  data: any
}

const Banner: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          {data.courseBannerImage && (
            <SC.Image
              style={{ position: "absolute" }}
              fluid={data.courseBannerImage.fluid}
            />
          )}
          <SC.ContentWrapper>
            <SC.ContentMain>
              <SC.Subtext>{data.courseBannerSubtext}</SC.Subtext>
              <SC.MainInfo>
                <SC.Title>{data.courseTitle}</SC.Title>
                <SC.InfoItems>
                  <SC.MainTag
                    disabled={data.courseTypeEmpty || !data.courseStatus}
                  >
                    {data.courseType}
                  </SC.MainTag>
                  {data.courseType === "Курс" ? (
                    <>
                      {data.courseStart && (
                        <SC.CourseStart>
                          Стартуем {data.courseStart}
                        </SC.CourseStart>
                      )}
                      {data.courseDuration && (
                        <SC.CourseDuration>
                          Учимся {data.courseDuration}
                        </SC.CourseDuration>
                      )}
                    </>
                  ) : (
                    <>
                      <SC.TagList>
                        {data.courseTags.map((tag, idx) => {
                          return (
                            <SC.Tag
                              disabled={
                                data.courseTypeEmpty || !data.courseStatus
                              }
                              key={idx}
                            >
                              {tag}
                            </SC.Tag>
                          )
                        })}
                      </SC.TagList>
                    </>
                  )}
                </SC.InfoItems>
              </SC.MainInfo>
            </SC.ContentMain>
            <SC.ContentButton>
              {data.courseTypeEmpty ? (
                <SC.CourseButtonDevelopment>
                  В разработке
                </SC.CourseButtonDevelopment>
              ) : (
                <>
                  {data.courseType === "Курс" ? (
                    <SC.CourseButton
                      status={!data.courseStatus}
                      target="_blank"
                      href={data.courseSlug}
                    >
                      {data.courseStatus ? "Участвовать" : "Узнать о наборе"}{" "}
                      <CourseArrowOut />
                    </SC.CourseButton>
                  ) : (
                    <SC.CourseButton
                      status={!data.courseStatus}
                      target="_blank"
                      href={data.courseSlug}
                      type={data.courseType}
                    >
                      {data.courseStatus ? "Купить" : "Предзаказ"}{" "}
                      <CourseArrowOut />
                    </SC.CourseButton>
                  )}
                </>
              )}

              {data.courseStart && (
                <SC.CourseMobileStart>
                  Стартуем <br />
                  {data.courseStart}
                </SC.CourseMobileStart>
              )}
            </SC.ContentButton>
          </SC.ContentWrapper>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Banner
