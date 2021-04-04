import React from "react"
import { ITeam } from "../../../interfaces/main-page"
import { Container } from "../../style"
import * as SC from "./OurTeam"
import TeamMember from "./teacher"

type Props = {
  data: ITeam
}

const OurTeam: React.FC<Props> = ({ data }) => {
  return (
    <SC.Section>
      <Container>
        <SC.CategoryTitle>Авторы</SC.CategoryTitle>
        <SC.Wrapper>
          {data.edges.map((teacher, idx) => {
            return (
              <React.Fragment key={teacher.node.id}>
                {teacher.node.teacherCategory === "Авторы" && (
                  <TeamMember teacher={teacher.node} />
                )}
              </React.Fragment>
            )
          })}
        </SC.Wrapper>
        <SC.CategoryTitle>Кураторы</SC.CategoryTitle>
        <SC.Wrapper>
          {data.edges.map((teacher, idx) => {
            return (
              <React.Fragment key={teacher.node.id}>
                {teacher.node.teacherCategory === "Кураторы" && (
                  <TeamMember teacher={teacher.node} />
                )}
              </React.Fragment>
            )
          })}
        </SC.Wrapper>
        <SC.CategoryTitle>Координаторы</SC.CategoryTitle>
        <SC.Wrapper>
          {data.edges.map((teacher, idx) => {
            return (
              <React.Fragment key={teacher.node.id}>
                {teacher.node.teacherCategory === "Координаторы" && (
                  <TeamMember teacher={teacher.node} />
                )}
              </React.Fragment>
            )
          })}
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default OurTeam
