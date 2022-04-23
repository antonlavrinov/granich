import React from "react";
import * as SC from "./style";
import { graphql, useStaticQuery } from "gatsby";
import TelegramIcon from "../../../../../assets/svgs/social-side-icons/social-side-icon-telegram_noshadow.svg";
import InfoIcon from "../../../../../assets/svgs/info-icon.svg";
import { Tooltip } from "react-tippy";

const IndividualSupport = () => {

  const authorImage = useStaticQuery(graphql`
    query individualSupportAuthorImage {
      placeholderImage: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <SC.Wrapper>
      <SC.MainInfoWrapper>
        <SC.AuthorImage fluid={authorImage.placeholderImage.childImageSharp.fluid} />
        <SC.MainInfo>
          <SC.Title><b>Индивидуальное прохождение курса </b>с Вадимом Граничем (основателем Школы)</SC.Title>
          <SC.Form>
            <SC.Price>50 000₽</SC.Price>
            <SC.Button target="_blank" href="https://t.me/vadim_granich">
              <TelegramIcon />
              @vadim_granich
            </SC.Button>
          </SC.Form>
        </SC.MainInfo>
      </SC.MainInfoWrapper>
      <Tooltip
        html={(
          <SC.TooltipContent>
            Вы можете пройти курс по стандартной стоимости, в учебной группе с кураторами, которых подготавливал Гранич. Или можете пройти курс индивидуально с Граничем. Это дороже, однако, есть свои плюсы:
            <span>поблажки по дедлайнам</span>
            <span>ответы по теории непосредственно от создателя Курса</span>
            <span>возможность обсуждать дополнительные вопросы из мира графического дизайна, выходя за рамки Курса</span>
            <span>передаст знания об оздоровлении тела</span>
            <span>научит медитировать по 40 минут в день</span>
            <span>приедет к вам на ДР станцевать 😜</span>
          </SC.TooltipContent>
        )}
        animation="shift"
        theme="light"
        arrow
        interactive
        // trigger="click"
      >
        <SC.AdditionalInfo>
          <InfoIcon />
          Напишите Вадиму в телеграм, для уточнения наличия мест
        </SC.AdditionalInfo>
      </Tooltip>
    </SC.Wrapper>
  )
}

export default IndividualSupport;