import React from "react"
import { Container } from "../../../style"
import CourseArrowDown from "../../../../assets/svgs/course-arrow-down-27.svg"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import * as SC from "../CourseOffer"
import { ICourseCard } from "../../../../interfaces/main-page"

type Props = {
  data: ICourseCard
}

const MasterClassTemplateOffer: React.FC<Props> = ({ data }) => {
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
              fluid={data.courseMainImage.fluid}
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
