import React from "react"
import styled from "styled-components"
import RunIcon from "../../assets/svgs/graph-design/graph-design-dont-worry.svg"

const DontWorryWrapper = styled.div`
  padding: 2.3vw 2.5vw;
  border-radius: 0.6vw;
  background: var(--granich-beige-gradient);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2vw;
  @media only screen and (max-width: 575px) {
    padding: 6vw;
    border-radius: 2.5vw;
    flex-direction: column;
    margin-top: 4vw;
  }
`

const DontWorryQuote = styled.div`
  font-family: EB Garamond;
  font-style: italic;
  font-size: 3.3vw;
  color: white;
  line-height: 1.05;
  margin-top: -0.5vw;
  width: 10vw;
  @media only screen and (max-width: 575px) {
    width: 100%;
    font-size: 7.5vw;
    margin-bottom: 5vw;
    text-align: center;
  }
`

const DontWorryTextWrapper = styled.div`
  background: var(--granich-dark-beige);
  padding: 1.5vw 1.8vw;
  border-radius: 0.5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  svg {
    width: 6.5vw;
    height: 7.5vw;
    margin-right: -0.5vw;
    fill: #bc9474;
  }
  @media only screen and (max-width: 575px) {
    padding: 3vw 4vw;
    border-radius: 1.5vw;
    flex-direction: column;
    width: 100%;
    svg {
      width: 20vw;
      margin-top: 2vw;
      transform: translateX(5%);
      height: 24vw;
    }
  }
`

const DontWorryText = styled.div`
  font-size: 1.15vw;
  color: white;
  line-height: 1.35;
  width: 39vw;
  span {
    line-height: 0;
    background: var(--granich-beige-gradient);
    color: white;
    padding: 0 0.35vw 0.1vw;
    border-radius: 0.3vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    width: 100%;
    span {
      padding: 0 1.5vw 0.5vw;
      border-radius: 1.5vw;
    }
  }
`

const CourseDontWorry = () => {
  return (
    <DontWorryWrapper>
      <DontWorryQuote>Будьте спокойны!</DontWorryQuote>
      <DontWorryTextWrapper>
        <DontWorryText>
          Система отстранений на курсе сделана, чтобы мотивировать вас. Нагрузки
          продуманы так, чтобы до отстранения не доходило. Если вы будете
          целенаправленно заниматься хотя бы <span>2 часа</span> каждый день, то
          вы справитесь. Отстранения нужны для того, чтобы не позволять
          оставаться на курсе совсем уже разленившимся людям.
        </DontWorryText>
        <RunIcon />
      </DontWorryTextWrapper>
    </DontWorryWrapper>
  )
}

export default CourseDontWorry
