import React from "react"
import { Container } from "../../../style"
import CourseArrowDown from "../../../../assets/svgs/course-arrow-down-27.svg"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useMediaQuery } from "react-responsive"
import * as SC from "../CourseOffer"
import Posters from "../posters"
import PostersWrapper from "../posters/PostersWrapper"
import { RootWrapper } from "../posters/Posters"
// import scrollTo from "gatsby-plugin-smoothscroll"
// import DescrTooltip from "../../description-tooltip"

const CourseTemplateOffer = ({
  data,
  postersVisibility,
  postersAuthors,
  allowPosters,
  additionalText,
  permission,
  courseDescr,
}) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 575px)",
  })

  return (
    <SC.Section>
      {postersVisibility && allowPosters && isDesktop && (
        <RootWrapper>
          <Posters postersCollection={data.coursePostersCollection} />
        </RootWrapper>
      )}
      <Container>
        <SC.Wrapper type={data.courseType}>
          <SC.Info>
            <SC.Tags className="noselect">
              <>
                {data.courseStream && (
                  <SC.MainTag>
                    <SC.Potok />
                    {data.courseStream} поток
                  </SC.MainTag>
                )}
                {data.courseStartAndEnd && (
                  <SC.Tag>
                    <SC.Date />
                    {data.courseStartAndEnd}
                  </SC.Tag>
                )}
                {data.courseTags.map((tag, idx) => {
                  return <SC.Tag key={idx}>{tag}</SC.Tag>
                })}
              </>
            </SC.Tags>
            <SC.Title
              className="noselect"
              courseTitle={data.courseTitle}
              type={data.courseType}
            >
              {documentToReactComponents(data.courseMainTitle.json)}
            </SC.Title>
            {!allowPosters && (
              <SC.MainImage
                imgStyle={{
                  objectFit: "contain",
                  objectPosition: "right center",
                }}
                src={data.courseMainImage.src}
                courseTitle={data.courseTitle}
              />
            )}
            {allowPosters && (
              <PostersWrapper
                data={data}
                postersVisibility={postersVisibility}
              />
            )}
            {postersAuthors && (
              <SC.PostersLabel>{postersAuthors}</SC.PostersLabel>
            )}
            <SC.Descr
              className="noselect"
              courseTitle={data.courseTitle}
              type={data.courseType}
            >
              {courseDescr ? courseDescr : data.courseDescr}
            </SC.Descr>
            <SC.ButtonWrapper>
              <SC.Button 
              // onClick={() => {scrollTo("#participation-section"); console.log("scroll")}} 
              to={`${permission ? "?permission=1" : ""}#participation-section`}
              >
                <CourseArrowDown />
                Участвовать
              </SC.Button>
              {additionalText && (
                <SC.AdditionalText>{additionalText}</SC.AdditionalText>
              )}
            </SC.ButtonWrapper>
          </SC.Info>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default CourseTemplateOffer
