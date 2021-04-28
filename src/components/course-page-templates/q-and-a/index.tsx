import React from "react"
import { Container } from "../../style"

import scrollTo from "gatsby-plugin-smoothscroll"

import "react-accessible-accordion/dist/fancy-example.css"

import * as SC from "./QandA"
import { INLINES } from "@contentful/rich-text-types"
import { useMediaQuery } from "react-responsive"
import QandAItemDesktop from "./q-and-a-item/QandAItemDesktop"
import QandAItemMobile from "./q-and-a-item/QandAItemMobile"

const options = {
  renderNode: {
    [INLINES.HYPERLINK]: node => {
      return (
        <a href={node.data.uri} rel="noopener noreferrer" target="_blank">
          {node.content[0].value}
        </a>
      )
    },
  },
}

const CourseQandA = ({ data }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)",
  })
  const isDesktop = useMediaQuery({
    query: "(min-width: 575px)",
  })
  return (
    <SC.Section>
      <Container>
        <SC.MainWrapper>
          <SC.Wrapper>
            <SC.Header>
              <SC.SectionTitle>Точечные ответы о курсе</SC.SectionTitle>
              <SC.SectionText>
                Тут мы собрали ответы на самые популярные вопросы о курсе
                Осознанный Графдизайн
              </SC.SectionText>
            </SC.Header>
            {isDesktop && <QandAItemDesktop data={data} options={options} />}
            {isMobile && <QandAItemMobile data={data} options={options} />}
          </SC.Wrapper>
          <SC.FooterContainer>
            <SC.FooterWrapper>
              <SC.FooterLink onClick={() => scrollTo("#participation-section")}>
                Вернуться к форме оплаты Курса!
                <SC.ArrowLinkTop />
              </SC.FooterLink>
            </SC.FooterWrapper>
            <SC.FooterWrapperMobile>
              Вернуться к форме оплаты{" "}
              <SC.FooterLink onClick={() => scrollTo("#participation-section")}>
                Курса!
                <SC.ArrowLinkTopMobile />
              </SC.FooterLink>
            </SC.FooterWrapperMobile>
          </SC.FooterContainer>
        </SC.MainWrapper>
      </Container>
    </SC.Section>
  )
}

export default CourseQandA
