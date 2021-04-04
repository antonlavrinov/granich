import React from "react"
import * as SC from "../Course"

const MasterCard = ({
  courseData,
  empty,
  calendar,
  arrowWhite,
  arrowBlack,
}) => {
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
            active={courseData.node.courseStatus}
            empty={empty}
            fluid={courseData.node.coursePreviewImage.fluid}
          ></SC.Image>
          <SC.MainTag active={courseData.node.courseStatus} empty={empty}>
            Мастер-класс
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
        <SC.Descr active={courseData.node.courseStatus}>
          {courseData.node.courseDescr}
        </SC.Descr>
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
                    <SC.ButtonText>Купить</SC.ButtonText>
                    <SC.ArrowIcon fluid={arrowWhite} />
                  </>
                ) : (
                  <>
                    <SC.ButtonText>Предзаказ</SC.ButtonText>
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

export default MasterCard
