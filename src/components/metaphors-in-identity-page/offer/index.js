import React from "react";
import { Container } from "../../style";
import * as SC from "./style";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CourseArrowDown from "../../../assets/svgs/course-arrow-down-27.svg"

const MetaphorsOffer = ({ data, permission }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
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
          <SC.Title>
            {documentToReactComponents(data.courseMainTitle.json)}
          </SC.Title>
          <SC.Descr>
            {data.courseDescr}
          </SC.Descr>
          <SC.ButtonWrapper>
            <SC.Button to={`${permission ? "?permission=1" : ""}#participation-section`}>
              <CourseArrowDown />
              Участвовать
            </SC.Button>
          </SC.ButtonWrapper>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default MetaphorsOffer;
