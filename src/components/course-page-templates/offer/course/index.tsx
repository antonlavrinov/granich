import React from "react"
import { Container } from "../../../style"
import CourseArrowDown from "../../../../assets/svgs/course-arrow-down-27.svg"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useMediaQuery } from "react-responsive"
import * as SC from "../CourseOffer"
import Posters from "../posters"
import { ICourseCard } from "../../../../interfaces/main-page"
import PostersWrapper from "../posters/PostersWrapper"
import { RootWrapper } from "../posters/Posters"

type Props = {
  data: ICourseCard
  postersVisibility?: boolean
  allowPosters?: boolean
  additionalText?: string
}

const CourseTemplateOffer: React.FC<Props> = ({
  data,
  postersVisibility,
  postersAuthors,
  allowPosters,
  additionalText
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
                fluid={data.courseMainImage.fluid}
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
              {data.courseDescr}
            </SC.Descr>
            <SC.ButtonWrapper>
              <SC.Button to="#participation-section">
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
