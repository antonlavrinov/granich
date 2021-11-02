import React from "react"
import { Container } from "../style"
import * as SC from "./Blog"
import VKIcon from "../../assets/svgs/granich-main-team/vk.svg"
import InstagramIcon from "../../assets/svgs/granich-main-team/instagram.svg"
import TelegramIcon from "../../assets/svgs/granich-main-team/telegram.svg"
import PinterestIcon from "../../assets/svgs/granich-main-team/pinterest.svg"
import YoutubeIcon from "../../assets/svgs/youtube_black.svg"
// import MasterClassTeacherBlock from "../../components/course-page/CourseAuthors"
import TeamMember from "../main-page/team/teacher"

type Props = {
  team: any
}

const Blog: React.FC<Props> = ({ team }) => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Ведём блог для дизайнеров</SC.Title>
          <SC.Text>
            Дублируем блог на эти площадки. Здесь публикуем работы учеников и
            различные посты о дизайне:
          </SC.Text>
          <SC.Socials>
            <SC.Social>
              <InstagramIcon />
              <a
                href="https://www.instagram.com/granichgram"
                rel="noopener noreferrer"
                target="_blank"
              >
                @granichgram
              </a>
            </SC.Social>
            <SC.Social>
              <TelegramIcon />
              <a
                href="https://t.me/granichannel"
                rel="noopener noreferrer"
                target="_blank"
              >
                t.me/granichannel
              </a>
            </SC.Social>
            <SC.Social>
              <VKIcon />
              <a
                href="https://vk.com/granichvk"
                rel="noopener noreferrer"
                target="_blank"
              >
                vk.com/granichvk
              </a>
            </SC.Social>
          </SC.Socials>
          <SC.Devider />
          <SC.Text>А на Ютубе ведём стримы и публикуем видеоуроки:</SC.Text>
          <SC.Socials>
            <SC.Social youtube>
              <YoutubeIcon />
              <a
                href="https://www.youtube.com/channel/UCCyKQE_YbC1fO96Hw9XXHPQ"
                rel="noopener noreferrer"
                target="_blank"
              >
                youtube.com/c/granich
              </a>
            </SC.Social>
          </SC.Socials>
          <SC.Devider />
          <SC.Text>Энциклопедия Графдизайна. Кладезь референсов для графических дизайнеров:</SC.Text>
          
          <SC.Socials>
            <SC.Social>
              <PinterestIcon />
              <a
                href="https://pin.it/2IdVLUy"
                rel="noopener noreferrer"
                target="_blank"
              >
                pinterest.ru/vadim_granich
              </a>
            </SC.Social>
          </SC.Socials>
        </SC.Wrapper>
        <SC.Team>
          {team.map((el, idx) => {
            return <TeamMember key={el.node.id} teacher={el.node} />
          })}
        </SC.Team>
      </Container>
    </SC.Section>
  )
}

export default Blog
