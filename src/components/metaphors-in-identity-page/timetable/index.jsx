import React from "react"
import { Container } from "../../style"
import { graphql, useStaticQuery } from "gatsby"
import * as SC from "./Timetable"

const Timetable = () => {
  const data = useStaticQuery(graphql`
    query timetableMetaphorsImage {
      imageTimetableMetaphors: file(
        relativePath: {
          eq: "metaphors-in-identity-page/metaphors-in-identity-page_table.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1400, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.imageTimetableMetaphors.childImageSharp.fluid
  const text =
    "Каждый этап начинается в понедельник. В рамках каждого этапа мы тренируем графические метафоры в новых нишах бизнеса. Ученик выбирает себе какие-то ниши бизнеса (1 или 2), по которым начинает прорабатывать какие-то графические метафоры. В среду есть возможность прислать мне свои наработки для первого видеоразбора. В субботу присылаем свои наработки для второго разбора. Я записываю видеоразбор всем ученикам."

  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Расписание</SC.Title>
          <SC.Info>
            <SC.Text>{text}</SC.Text>
            <SC.Warning>
              <SC.WarningIcon />
              <SC.WarningText>
                Если вы не присылаете наработки в день разбора, то вы
                пропускаете этот разбор, и вам придётся ждать следующего дня
                разбора
              </SC.WarningText>
            </SC.Warning>
          </SC.Info>
          <SC.Image fluid={imageData} />
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Timetable
