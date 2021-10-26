import React from "react"
import * as SC from "../Course"

type Props = {
  courseData: any
  icons: any
}

const CourseCard: React.FC<Props> = ({ courseData, icons }) => {

  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.TagList empty={courseData.courseTypeEmpty}>
          <>
            {courseData.courseTags.map((courseTag, idx) => {
              return (
                <SC.Tag key={idx} active={courseData.courseStatus}>
                  {courseTag}
                </SC.Tag>
              )
            })}
          </>
        </SC.TagList>

        <SC.ImageWrapper>
          <SC.Image
            empty={courseData.courseTypeEmpty}
            active={courseData.courseStatus}
            fluid={courseData.coursePreviewImage.fluid}
          ></SC.Image>
          <SC.MainTag
            empty={courseData.courseTypeEmpty}
            active={courseData.courseStatus}
          >
            {courseData.courseAdditionalType ?? "Курс"}
          </SC.MainTag>
          <SC.Teachers>
            {courseData.courseTeachers.length > 1 ? (
              <>
                {courseData.courseTeachers.map((teacher, idx) => {
                  return (
                    <SC.Teacher
                      several={true}
                      key={idx}
                      fluid={teacher.fluid}
                    />
                  )
                })}
              </>
            ) : (
              <SC.Teacher fluid={courseData.courseTeachers[0].fluid} />
            )}
          </SC.Teachers>
        </SC.ImageWrapper>
        <SC.Title active={courseData.courseStatus}>
          {courseData.courseTitle}
        </SC.Title>
        <SC.Info active={courseData.courseStatus}>
          {courseData.courseStart && (
            <SC.Start active={courseData.courseStatus}>
              Стартуем <br /> <span>{courseData.courseStart}</span>
            </SC.Start>
          )}
          {courseData.courseDuration && (
            <SC.Duration active={courseData.courseStatus}>
              Учимся <br /> <span>{courseData.courseDuration}</span>
            </SC.Duration>
          )}
        </SC.Info>
      </SC.Container>
      <SC.Button
        empty={courseData.courseTypeEmpty ? 1 : 0}
        active={courseData.courseStatus}
      >
        <SC.ButtonContainer>
          <SC.ButtonWrapper>
            {courseData.courseTypeEmpty ? (
              <>
                <SC.ButtonText empty>
                  Узнать <br />
                  об открытии
                </SC.ButtonText>
                <SC.ArrowIcon fluid={icons.calendar} />
              </>
            ) : (
              <>
                {courseData.courseStatus ? (
                  <>
                    <SC.ButtonText>{courseData.courseButtonText ?? "Участвовать"}</SC.ButtonText>
                    <SC.ArrowIcon fluid={icons.arrowWhite} />
                  </>
                ) : (
                  <>
                    <SC.ButtonText>
                      {courseData.courseButtonText ?? (<>Узнать <br />о наборе</>)}
                    </SC.ButtonText>
                    <SC.ArrowIcon fluid={icons.arrowBlack} />
                  </>
                )}
              </>
            )}
          </SC.ButtonWrapper>
        </SC.ButtonContainer>
      </SC.Button>
    </SC.Wrapper>
  )
}

export default CourseCard
