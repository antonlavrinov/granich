import React from "react"
import { Container } from "../../../style"
import CourseArrowDown from "../../../../assets/svgs/course-arrow-down-27.svg"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as SC from "../CourseOffer"

const MasterClassTemplateOffer= ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper type={data.courseType}>
          <SC.Info>
            <SC.Tags className="noselect">
              {data.courseTags.map((tag, idx) => {
                return <SC.Tag key={idx}>{tag}</SC.Tag>
              })}
            </SC.Tags>
            <SC.Title
              className="noselect"
              courseTitle={data.courseTitle}
              type={data.courseType}
            >
              {documentToReactComponents(data.courseMainTitle.json)}
            </SC.Title>
            <SC.MainImage
              imgStyle={{
                objectFit: "contain",
                objectPosition: "right center",
              }}
              src={data.courseMainImage.src}
            />

            <SC.Descr
              className="noselect"
              courseTitle={data.courseTitle}
              type={data.courseType}
            >
              {data.courseDescr}
            </SC.Descr>
            <SC.Button to="#prices-range-section" type={data.courseType}>
              Купить
              <CourseArrowDown />
            </SC.Button>
          </SC.Info>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default MasterClassTemplateOffer
