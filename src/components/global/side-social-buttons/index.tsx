import React, { useState } from "react"
import Support from "./support"
import PageTop from "./page-top"
import EmailIcon from "../../../assets/svgs/social-side-icons/social-side-icon-email_noshadow.svg"
import { CopyToClipboard } from "react-copy-to-clipboard"
import { CSSTransition } from "react-transition-group"
import * as SC from "./SideButtons"

const SideButtons: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false)
  const [tooltipEmail, setTooltipEmail] = useState("Скопировать")
  const toggleChatOpen = boolean => {
    setChatOpen(boolean)
  }

  return (
    <SC.StyledSideButtons>
      <SC.Wrapper>
        <CSSTransition
          in={chatOpen}
          timeout={300}
          unmountOnExit
          classNames="side-buttons-transition"
        >
          <SC.Socials>
            <SC.IconLink>
              <CopyToClipboard text={"hello@granich.design"}>
                <SC.EmailWrapper
                  content={tooltipEmail}
                  onMouseLeave={() => setTooltipEmail("Скопировать")}
                  onClick={() =>
                    setTooltipEmail("Скопировано :) hello@granich.design")
                  }
                >
                  <SC.Email>
                    <EmailIcon />
                  </SC.Email>
                </SC.EmailWrapper>
              </CopyToClipboard>
            </SC.IconLink>

            <SC.IconLink
              content="Написать в Телеграме"
              target="_blank"
              href="https://t.me/granich_school"
            >
              <SC.Telegram />
            </SC.IconLink>
            <SC.IconLink
              content="Написать в Директ"
              target="_blank"
              href="https://www.instagram.com/granichgram"
            >
              <SC.Instagram />
            </SC.IconLink>

            <SC.IconLink
              content="Написать в WhatsApp"
              target="_blank"
              href="https://wa.me/79046434682"
            >
              <SC.Whatsup />
            </SC.IconLink>
            <SC.IconLink
              content="Написать в ВК"
              target="_blank"
              href="https://vk.com/write-164662407"
            >
              <SC.VK />
            </SC.IconLink>
          </SC.Socials>
        </CSSTransition>
        <Support toggleChatOpen={toggleChatOpen} chatOpen={chatOpen} />

        <PageTop />
      </SC.Wrapper>
    </SC.StyledSideButtons>
  )
}

export default SideButtons
