import React from "react"
import Course from "./course"
import { Modal } from "react-responsive-modal"
import * as SC from "./Courses"
import Cross from "../../../assets/svgs/cross.svg"
import "react-responsive-modal/styles.css"
import { useModal } from "./useModal"
import Mailing from "../../global/mailing"

type Props = {
  data: any
}

const CourseList: React.FC<Props> = ({ data }) => {
  const [modalIsOpen, openModal, closeModal] = useModal()

  return (
    <>
      <Modal
        center
        closeIcon={<div></div>}
        open={modalIsOpen}
        onClose={closeModal}
        focusTrapped={false}
        classNames={{
          overlay: "mailingOverlay",
          modal: "mailingModal",
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <SC.PopupCross onClick={closeModal}>
            <Cross />
          </SC.PopupCross>
          <Mailing />
        </div>
      </Modal>
      <SC.Wrapper>
        {data.map(course => {
          return (
            <Course
              openModal={openModal}
              key={course.node.id}
              courseData={course.node}
            />
          )
        })}
      </SC.Wrapper>
    </>
  )
}

export default CourseList
