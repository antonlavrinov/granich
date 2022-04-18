import React from "react"
import { Container } from "../../style"
import * as SC from "./Courses"
import CourseList from "./CourseList"

type Props = {
  data: any
}

const Courses: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section id="courses">
      <Container>
        <CourseList data={data} />
      </Container>
    </SC.Section>
  )
}

export default Courses
