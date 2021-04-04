import React from "react"
import { Container } from "../style"
import * as SC from "./Blog"
import VKIcon from "../../assets/svgs/granich-main-team/vk.svg"
import InstagramIcon from "../../assets/svgs/granich-main-team/instagram.svg"
import TelegramIcon from "../../assets/svgs/granich-main-team/telegram.svg"

const Blog: React.FC = () => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Блог в разработке...</SC.Title>
          <SC.Text>
            Когда мы его запустим на сайте мы оповестим на других площадках, где
            ведем блог школы:
          </SC.Text>
          <SC.Socials>
            <SC.Social>
              <VKIcon />{" "}
              <a
                href="https://vk.com/granichvk"
                rel="noopener noreferrer"
                target="_blank"
              >
                vk.com/granichvk
              </a>
            </SC.Social>
            <SC.Social>
              <TelegramIcon />{" "}
              <a
                href="https://t.me/granichannel"
                rel="noopener noreferrer"
                target="_blank"
              >
                t.me/granichannel
              </a>
            </SC.Social>
            <SC.Social>
              <InstagramIcon />{" "}
              <a
                href="https://www.instagram.com/granichgram"
                rel="noopener noreferrer"
                target="_blank"
              >
                @granichgram
              </a>
            </SC.Social>
          </SC.Socials>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Blog
