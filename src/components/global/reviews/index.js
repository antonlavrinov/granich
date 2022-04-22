import React from "react";
import * as SC from "./style";
import { Container } from "../../style";
import TelegramIcon from "../../../assets/svgs/telegram-plane-brands.svg";

const Reviews = () => (
  <SC.Section>
    <Container>
      <SC.SectionTitle>Отзывы о курсе</SC.SectionTitle>
      <SC.WrapperWithBackground>
        <SC.TelegramChannelImage isSingle src="/images/reviews-telegram-channel.jpg" alt="reviews-telegram-channel" />
        <SC.TelegramChannelText isSingle>
          Ещё больше отзывов можно посмотреть в Telegram-канале Отзывов по тегу <span>#графметафоры</span>
        </SC.TelegramChannelText>
        <SC.TelegramChannelButton target="_blank" href="https://t.me/granich_reviews">
          Перейти <TelegramIcon/>
        </SC.TelegramChannelButton>
      </SC.WrapperWithBackground>
    </Container>
  </SC.Section>
);

export default Reviews;
