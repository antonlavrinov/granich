import React from "react"
import * as SC from "../Course"

const MasterCard = ({ courseData, icons }) => {
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
            active={courseData.courseStatus}
            empty={courseData.courseTypeEmpty}
            fluid={courseData.coursePreviewImage.fluid}
          ></SC.Image>
          <SC.MainTag
            active={courseData.courseStatus}
            empty={courseData.courseTypeEmpty}
          >
            {courseData.courseAdditionalType ?? "Мастер-класс"}
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
        <SC.Descr active={courseData.courseStatus}>
          {courseData.courseDescr}
        </SC.Descr>
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
                  {courseData.courseButtonText ?? (<>Узнать <br />
                  об открытии</>)}
                </SC.ButtonText>
                <SC.ArrowIcon fluid={icons.calendar} />
              </>
            ) : (
              <>
                {courseData.courseStatus ? (
                  <>
                    <SC.ButtonText>{courseData.courseButtonText ?? "Купить"}</SC.ButtonText>
                    <SC.ArrowIcon fluid={icons.arrowWhite} />
                  </>
                ) : (
                  <>
                    <SC.ButtonText>{courseData.courseButtonText ?? "Предзаказ"}</SC.ButtonText>
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

export default MasterCard
