import React from "react"
import { Container } from "../../style"
import * as SC from "./ParticipationRestriction"
import TelegramIcon from "../../../assets/svgs/graphic-metaphors/telegram_plane.svg";


const ParticipationRestriction = () => {
  


  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
            <SC.RestrictionWarning>
                <SC.RestionWarningTitle>
                    Перед записью на курс пройдите собеседование
                </SC.RestionWarningTitle>
                <SC.RestionWarningInfo>
                    <SC.RestionionWarningText>
                        Для этого отправьте ссылку на своё портфолио в телеграм куратору курса
                    </SC.RestionionWarningText>
                    <SC.RestionWarningTelegramButton rel="noopener noreferrer" target="_blank" href="https://t.me/lissabilberry">
                        Отправить портфолио <TelegramIcon/>
                    </SC.RestionWarningTelegramButton>
                </SC.RestionWarningInfo>
            </SC.RestrictionWarning>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default ParticipationRestriction
