import React from "react"
import CourseList from "../../main-page/courses/CourseList"
import { Container } from "../../style"
import * as SC from "./AdobeIndesign"

type Props = {
  data: any
}

const AdobeIndesign: React.FC<Props> = ({ data, title, description }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.SectionHeader>
            <SC.SectionTitle>
              {title}
            </SC.SectionTitle>
            <SC.SectionDescrAndCard>
                <SC.SectionDescr>
                {description}
                </SC.SectionDescr>
                <CourseList data={data} />
            </SC.SectionDescrAndCard>
            
          </SC.SectionHeader>

          
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default AdobeIndesign
