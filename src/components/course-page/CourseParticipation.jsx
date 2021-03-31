import React from "react"
import { Container } from "../style"
import styled from "styled-components"
import ParticipationForm from "./participation/form"
import ParticipationPolicy from "./participation/ParticipationPolicy"

const ParticipationSection = styled.section`
  margin-bottom: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
  }
`

const ParticipationWrapper = styled.div`
  display: grid;
  grid-template-columns: 51% 47%;
  grid-column-gap: 2%;
  @media only screen and (max-width: 575px) {
    grid-template-columns: 100%;
    grid-column-gap: 0;
    grid-row-gap: 5vw;
  }
`

const CourseParticipation = ({
  data,
  formId,
  formAction,
  googleAnaliticsCategory,
  additionalTags,
  telegram,
  additionalComponent,
  policy,
}) => {
  return (
    <ParticipationSection>
      <Container>
        <ParticipationWrapper>
          <ParticipationForm
            additionalTags={additionalTags}
            googleAnaliticsCategory={googleAnaliticsCategory}
            formId={formId}
            formAction={formAction}
            data={data}
          />
          {policy && (
            <ParticipationPolicy
              additionalComponent={additionalComponent}
              telegram={telegram ? true : false}
              data={data}
            />
          )}
        </ParticipationWrapper>
      </Container>
    </ParticipationSection>
  )
}

export default CourseParticipation
