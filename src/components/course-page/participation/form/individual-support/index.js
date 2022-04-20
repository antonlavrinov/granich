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
          <SC.Title><b>Индивидуальное прохождение курса </b>с Вадимом Граничем (основателем Школы)</SC.Title>
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
            dfjkfdsjkjsdfdsf dfjkhdsf dfjkdhsfkjfdhs dfkjdsfkjdshf sdfkhdsfkjfhsd dsfkhsdfkjdshf dfskhdskjdsf
          </SC.TooltipContent>
        )}
        animation="shift"
        theme="light"
        arrow
        interactive
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