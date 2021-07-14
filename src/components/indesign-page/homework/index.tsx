import React from "react"
import { Container } from "../../style"
import * as SC from "./Homework"
import DownloadIcon from "../../../assets/svgs/download-icon.svg"

const Homework = () => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.HomeworkDownload>
            <SC.DownloadTitle>Домашнее задание</SC.DownloadTitle>
            <SC.DownloadFooter>
              <SC.DownloadButton>
                <DownloadIcon />
                Получить ДЗ*
              </SC.DownloadButton>
              <SC.DownloadNotice>*требуется авторизация</SC.DownloadNotice>
            </SC.DownloadFooter>
          </SC.HomeworkDownload>
          <SC.Consulting>
            <SC.ConsultingTitle>
              Хотите дополнительный видеоразбор от куратора?
            </SC.ConsultingTitle>
            <SC.ConsultingText>
              Можете оплатить его отдельно. Вдобавок, этим вы поддержите
              развитие этого и новых бесплатных курсов
            </SC.ConsultingText>
            <SC.ConsultingFooter>
              <SC.ConsultingPriceWrapper>
                <SC.ConsultingPriceText>
                  Стоимость разбора
                </SC.ConsultingPriceText>
                <SC.ConsultingPrice>
                  <span>900 ₽</span>
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
