import React, { useState } from "react"
import { Container } from "../../style"
import { CopyToClipboard } from "react-copy-to-clipboard"
import * as SC from "./BestGraduates"

const BestGraduates = () => {
  const [tooltipEmail, setTooltipEmail] = useState("Скопировать")

  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Ищете графдизайнеров на проект?</SC.Title>
          <SC.Text>
            Мы ведём базу лучших выпускников. Напишите нам на почту и мы сможем
            предложить для вас специалиста по графическому дизайну.
            <CopyToClipboard text={"hello@granich.design"}>
              <SC.Mail
                content={tooltipEmail}
                onMouseLeave={() => setTooltipEmail("Скопировать")}
                onClick={() => setTooltipEmail("Скопировано :)")}
              >
                hello@granich.design
              </SC.Mail>
            </CopyToClipboard>
          </SC.Text>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default BestGraduates
