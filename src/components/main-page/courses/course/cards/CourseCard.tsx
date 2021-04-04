import React from "react"
import * as SC from "../Course"

const CourseCard = ({
  courseData,
  empty,
  calendar,
  arrowWhite,
  arrowBlack,
}) => {
  const mainTagMentorType =
    courseData.node.courseTitle === "Осознанный Фриланс"
      ? "-наставничество"
      : ""

  return (
    <SC.Wrapper>
      <SC.Container>
        <SC.TagList empty={empty}>
          <>
            {courseData.node.courseTags.map((courseTag, idx) => {
              return (
                <SC.Tag key={idx} active={courseData.node.courseStatus}>
                  {courseTag}
                </SC.Tag>
              )
            })}
          </>
        </SC.TagList>

        <SC.ImageWrapper>
          <SC.Image
            empty={empty}
            active={courseData.node.courseStatus}
            fluid={courseData.node.coursePreviewImage.fluid}
          ></SC.Image>
          <SC.MainTag empty={empty} active={courseData.node.courseStatus}>
            Курс{mainTagMentorType}
          </SC.MainTag>
          <SC.Teachers>
            {courseData.node.courseTeachers.length > 1 ? (
              <>
                {courseData.node.courseTeachers.map((teacher, idx) => {
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
              <SC.Teacher fluid={courseData.node.courseTeachers[0].fluid} />
            )}
          </SC.Teachers>
        </SC.ImageWrapper>
        <SC.Title active={courseData.node.courseStatus}>
          {courseData.node.courseTitle}
        </SC.Title>
        <SC.Info active={courseData.node.courseStatus}>
          {courseData.node.courseStart && (
            <SC.Start active={courseData.node.courseStatus}>
              Стартуем <br /> <span>{courseData.node.courseStart}</span>
            </SC.Start>
          )}
          {courseData.node.courseDuration && (
            <SC.Duration active={courseData.node.courseStatus}>
              Учимся <br /> <span>{courseData.node.courseDuration}</span>
            </SC.Duration>
          )}
        </SC.Info>
      </SC.Container>
      <SC.Button empty={empty ? 1 : 0} active={courseData.node.courseStatus}>
        <SC.ButtonContainer>
          <SC.ButtonWrapper>
            {empty ? (
              <>
                <SC.ButtonText empty>
                  Узнать <br />
                  об открытии
                </SC.ButtonText>
                <SC.ArrowIcon fluid={calendar} />
              </>
            ) : (
              <>
                {courseData.node.courseStatus ? (
                  <>
                    <SC.ButtonText>Участвовать</SC.ButtonText>
                    <SC.ArrowIcon fluid={arrowWhite} />
                  </>
                ) : (
                  <>
                    <SC.ButtonText>
                      Узнать <br />о наборе
                    </SC.ButtonText>
                    <SC.ArrowIcon fluid={arrowBlack} />
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
