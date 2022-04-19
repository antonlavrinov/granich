import React from "react";
import * as SC from "./style";
import { Container } from "../../style";
import TelegramIcon from "../../../assets/svgs/telegram-plane-brands.svg";

const Reviews = () => {

  const reviewsData = [
    {
      "name": "Алина Медвецкая",
      "stream": 3,
      "telegramLink": "alimedvedica",
      "reviewText": "Информативный, насыщенный, без лишней воды курс. Лекции наполнены примерами, разборами хороших и плохих метафор, ссылками на полезные и вдохновляющие вещи. Куратор Елизавета Черникова всегда четко разбирает домашние задания, заботливо помогает и отвечает на все вопросы, показывает, как иначе можно подойти к метафоре, проводит стримы и всегда поддерживает и подбадривает. Хороший и душевный курс, всем советую.",
    },
    {
      "name": "Амалия Амирова",
      "stream": 2,
      "telegramLink": "xo_amm",
      "reviewText": "Курс по Графметафорам просто огнище! очень здорово, что к одной теме подходишь с нескольких сторон и смотришь на это под другим углом и более свежим взглядом. И сами подходы очень интересные, даже не задумывалась о некоторых (ибо раньше просто брала и делала, как идет из головы), а теперь это все более осознанно с: Само качество информации, конечно же, на высшем на уровне, как и во всей школе Гранича.",
    },
    {
      "name": "Маргарита Михайлова",
      "stream": 1,
      "telegramLink": "ritam8123",
      "reviewText": "Мне очень понравился курс, он прокачал мое видение на метафоры, потому что раньше я воспринимала их как-то поверхностно, не вдумываясь в содержание. Теперь я стала по-другому смотреть на работы других дизайнеров, и самое главное — на свои. Плюс, мне очень нравятся мои работы, которые получились в результате докрутки с куратором 🎉",
    },
  ];

  return (
    <SC.Section>
      <Container>
        <SC.SectionTitle>Отзывы о курсе</SC.SectionTitle>
        <SC.Wrapper>
          {reviewsData.map(({ name, reviewText, stream, telegramLink }, idx) => (
            <SC.Review key={idx}>
              <SC.ReviewerHeader>
                <SC.ReviewerImage src={`/images/graphic-metaphors/reviewers/${idx}.jpg`} alt={name} />
                <SC.ReviewerInfo>
                  <SC.ReviewerName>{name}</SC.ReviewerName>
                  <SC.ReviewerStream>{stream} поток</SC.ReviewerStream>
                  <SC.ReviewerTelegram target="_blank" href={`https://t.me/${telegramLink}`}><TelegramIcon/> @{telegramLink}</SC.ReviewerTelegram>
                </SC.ReviewerInfo>
              </SC.ReviewerHeader>
              <SC.ReviewerText>
                {reviewText}
              </SC.ReviewerText>
            </SC.Review>
          ))}
          <SC.ReviewsTelegramChannel>
            <SC.TelegramChannelImage src="/images/reviews-telegram-channel.jpg" alt="reviews-telegram-channel" />
            <SC.TelegramChannelText>
              Ещё больше отзывов можно посмотреть в Telegram-канале Отзывов по тегу <span>#графметафоры</span>
            </SC.TelegramChannelText>
            <SC.TelegramChannelButton target="_blank" href="https://t.me/granich_reviews">
              Перейти <TelegramIcon/>
            </SC.TelegramChannelButton>
          </SC.ReviewsTelegramChannel>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Reviews
