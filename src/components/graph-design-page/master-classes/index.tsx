import React from "react"
import CourseList from "../../main-page/courses/CourseList"
import { Container } from "../../style"
import * as SC from "./MasterClasses"

type Props = {
  data: any
}

const MasterClasses: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.SectionHeader>
            <SC.SectionTitle>
              Не готовы сейчас записаться на Осознанный Графдизайн?
            </SC.SectionTitle>
            <SC.SectionDescr>
              Тогда вы можете попробовать наши мастер‑классы. Они стоят гораздо
              меньше, и у них нет дедлайнов.
            </SC.SectionDescr>
          </SC.SectionHeader>

          <CourseList data={data} />
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default MasterClasses
