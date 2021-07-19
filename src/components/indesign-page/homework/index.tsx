import React from "react"
import { Container } from "../../style"
import * as SC from "./Homework"
import HomeworkForm from "./HomeworkForm"

const Homework = () => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.HomeworkDownload>
            <SC.DownloadTitle>Домашнее задание</SC.DownloadTitle>
            <SC.DownloadFooter>
              <HomeworkForm />
              <SC.DownloadNotice>
                *Нужно залогиниться в личный кабинет или создать его
              </SC.DownloadNotice>
            </SC.DownloadFooter>
          </SC.HomeworkDownload>
          <SC.Consulting>
            <SC.ConsultingTitle>
              Хотите дополнительный видеоразбор от куратора?
            </SC.ConsultingTitle>
            <SC.ConsultingText>
              Можете оплатить его отдельно. Вдобавок, этим вы поддержите
              создание нового бесплатного контента командой Granich
            </SC.ConsultingText>
            <SC.ConsultingFooter>
              <SC.ConsultingPriceWrapper>
                <SC.ConsultingPriceText>
                  Стоимость разбора
                </SC.ConsultingPriceText>
                <SC.ConsultingPrice>
                  <span>1500 ₽</span>
                </SC.ConsultingPrice>
              </SC.ConsultingPriceWrapper>

              <SC.ConsultingButton>Оплатить разбор</SC.ConsultingButton>
            </SC.ConsultingFooter>
          </SC.Consulting>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Homework
