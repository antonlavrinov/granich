import React, { useState } from "react"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { Container } from "../../style"
import * as SC from "./EducationQuestions"

const EducationQuestions: React.FC = () => {
  const [tooltipEmail, setTooltipEmail] = useState("Скопировать")
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          Вопросы по обучению пишите:{" "}
          <CopyToClipboard text={"hello@granich.design"}>
            <SC.Email
              content={tooltipEmail}
              onMouseLeave={() => setTooltipEmail("Скопировать")}
              onClick={() => setTooltipEmail("Скопировано :)")}
            >
              hello@granich.design
            </SC.Email>
          </CopyToClipboard>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default EducationQuestions
