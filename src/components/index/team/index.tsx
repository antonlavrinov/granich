import React from "react"
import { Container } from "../../style"
import * as SC from "./OurTeam"
import TeamMember from "./teacher"

const OurTeam = ({ data }) => {
  // console.log("data", data.map((el) => el))
  return (
    <SC.Section>
      <Container>
        <SC.CategoryTitle>Авторы</SC.CategoryTitle>
        <SC.Wrapper>
          {data.map((teacher, idx) => {
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
          {data.map((teacher, idx) => {
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
          {data.map((teacher, idx) => {
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
