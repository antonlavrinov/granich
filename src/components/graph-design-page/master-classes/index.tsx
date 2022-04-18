import React from "react"
import CourseList from "../../index/courses/CourseList"
import { Container } from "../../style"
import * as SC from "./MasterClasses"

type Props = {
  data: any
}

const MasterClasses: React.FC<Props> = ({ data, title, description }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.SectionHeader>
            <SC.SectionTitle>
              {title}
            </SC.SectionTitle>
            <SC.SectionDescr>
              {description}
            </SC.SectionDescr>
          </SC.SectionHeader>

          <CourseList data={data} />
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default MasterClasses
