import React from "react"
import { Container } from "../../style"
import * as SC from "./HomeworkAndConsulting"
import HomeworkForm from "./HomeworkForm"
import "react-responsive-modal/styles.css"
import { Modal } from "react-responsive-modal"
import Homework from "./homework"
import Consulting from "./consulting"

const HomeworkAndConsulting = () => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <Homework />
          <Consulting />
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default HomeworkAndConsulting
