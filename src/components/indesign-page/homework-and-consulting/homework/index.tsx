import React, { useState } from "react"

import { Wrapper, Title, Footer, Notice, DownloadButton } from "./Homework"
import HomeworkAndConsultingModal from "../modal"
import "react-responsive-modal/styles.css"
import DownloadIcon from "../../../../assets/svgs/zip-icon_big.svg"

import { Modal } from "react-responsive-modal"

const Homework = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <Wrapper>
      <Title>Домашнее задание</Title>
      <Footer>
        <Modal
          center
          closeIcon={<div></div>}
          open={modalIsOpen}
          onClose={closeModal}
          focusTrapped={false}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
        >
          <HomeworkAndConsultingModal
            // googleAnaliticsCategory={googleAnaliticsCategory}
            formId={"ltForm3034275"}
            formPostUrl={
              "https://school.granich.design/pl/lite/block-public/process-html?id=1103520643"
            }
            title="Получить ДЗ"
            buttonTitle={
              <>
                <DownloadIcon />
                Получить ДЗ
              </>
            }
            openModal={openModal}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
          />
        </Modal>
        <DownloadButton type="submit" id="button9712993" onClick={openModal}>
          <DownloadIcon />
          Получить ДЗ*
        </DownloadButton>
        <Notice>*Нужно залогиниться в учебный кабинет или создать его</Notice>
      </Footer>
    </Wrapper>
  )
}

export default Homework
