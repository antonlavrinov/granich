import React, { useState } from "react"
import {
  Wrapper,
  Title,
  Text,
  Footer,
  PriceWrapper,
  PriceText,
  Price,
  Button,
  SubTitle,
  ItemsList,
  Item,
  Notice,
  Warning,
} from "./Consulting"
import "react-responsive-modal/styles.css"
import CheckIcon from "../../../../assets/svgs/check-icon.svg"
import WarningIcon from "../../../../assets/svgs/warning-sign.svg"
import ClockIcon from "../../../../assets/svgs/clock.svg"
import { Modal } from "react-responsive-modal"
import HomeworkAndConsultingModal from "../modal"

const Consulting = () => {
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <Wrapper>
      <SubTitle>Видеоразбор</SubTitle>
      <Title>Домашнего задания</Title>
      <Text>В домашнее задание входит:</Text>
      <ItemsList>
        <Item>
          <CheckIcon />
          <span>
            <b>
              Технические задания на закрепление инструментов Adobe InDesign
            </b>
            Куратор проконтролирует, что вы поняли все важные кнопки и настройки
            индизайна
          </span>
        </Item>
        <Item>
          <CheckIcon />
          <span>
            <b>Задание на проработку стартовых графических идей</b>Куратор
            поможет вам лучше понять и раскрыть эти идеи, чтобы перейти к более
            сложным
          </span>
        </Item>
        <Item>
          <CheckIcon />
          <span>
            <b>
              Готовые макеты на повторение для лучшего закрепления принципов
              вёрстки
            </b>
            Куратор проверит точность вашей вёрстки и подскажет, если вы что-то
            пропустили
          </span>
        </Item>
        <Item>
          <CheckIcon />
          <span>
            <b>Задание на создание творческого макета с нуля</b>Куратор даст
            комментарии и профессиональные рекомендации по творческому макету
          </span>
        </Item>
      </ItemsList>
      <Warning>
        <ClockIcon />
        <span>
          После оплаты, видеоразбор для вас запишут в течение 2‑х рабочих дней
        </span>
      </Warning>
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
            formId={"ltForm3061579"}
            formPostUrl={
              "https://school.granich.design/pl/lite/block-public/process-html?id=1106289473"
            }
            title="Заказать видеоразбор ДЗ"
            buttonTitle="Оплатить"
            openModal={openModal}
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
            googleAnaliticsCategory="Отправка формы Заказать видеоразбор ДЗ (Granich InDesign)"
            price={"→ 1500 ₽"}
          />
        </Modal>
        <PriceWrapper>
          <PriceText>Стоимость разбора:</PriceText>
          <Price>
            <span>1500 ₽</span>
          </Price>
        </PriceWrapper>

        <Button onClick={openModal}>Оплатить разбор</Button>
      </Footer>
      {/* <Notice>
            Заказывая видеоразбор, вы, в том числе, можете оченить качество работы наших кураторов и осознанно сделать вывод, хотите ли вы идти на платные курсы
      </Notice> */}
    </Wrapper>
  )
}

export default Consulting
