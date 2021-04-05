import React from "react"
import { Container } from "../../style"
import { graphql, useStaticQuery } from "gatsby"
import * as SC from "./Manifest"

const Manifest = () => {
  const data = useStaticQuery(graphql`
    query authorImage {
      placeholderImage: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 350, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.placeholderImage.childImageSharp.fluid
  return <PureManifest image={imageData} />
}

export default Manifest

export const ManifestRule = ({ title, text, number }) => {
  return (
    <SC.Rule>
      <SC.RuleTitle>{title}</SC.RuleTitle>
      {text}
      <SC.RuleNumber>{number}</SC.RuleNumber>
    </SC.Rule>
  )
}

export const PureManifest = ({ image }) => (
  <SC.Section id="manifest">
    <Container>
      <SC.Wrapper>
        <SC.InfoTitle>Делаем из любви, а не страха</SC.InfoTitle>
        <SC.SecondaryWrapper>
          <SC.Author>
            <SC.AuthorImage fluid={image} style={{ backgroundSize: "cover" }} />
            <SC.AuthorInfoWrapper>
              <SC.AuthorName>Вадим Гранич</SC.AuthorName>
              <SC.AuthorText>
                Создатель школы, <br />
                автор курсов
              </SC.AuthorText>
            </SC.AuthorInfoWrapper>
          </SC.Author>
          <SC.Info>
            <SC.InfoText>
              Сюда приходят, чтобы с любовью развивать в себе твердые навыки, а
              не из страха срочно понахвататься каких-то знаний. Поэтому,
              создавая курсы, я придерживаюсь трех принципов:
            </SC.InfoText>
            <SC.InfoRules>
              <ManifestRule
                title={`Выточено —`}
                text={`Вся информация на курсах очищена от лишнего, грамотно подана и структурирована`}
                number={1}
              />
              <ManifestRule
                title={`Интенсивно —`}
                text={`Курсы занимают много времени, акцент на практику (смотрите фильм Одержимость)`}
                number={2}
              />
              <ManifestRule
                title={`С дедлайнами —`}
                text={`Не получится просто взять курс и забыть о нем. Дедлайны будут постоянно вас толкать вперед`}
                number={3}
              />
            </SC.InfoRules>
          </SC.Info>
        </SC.SecondaryWrapper>
      </SC.Wrapper>
    </Container>
  </SC.Section>
)
