import styled, { css } from "styled-components"

export const Section = styled.section`
  margin-bottom: 4vw;
  margin-top: 4vw;

  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1.5vw;
  grid-row-gap: 1.5vw;

  @media only screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-column-gap: 4vw;
    grid-row-gap: 4vw;
  }
`;

export const SectionTitle = styled.div`
  font-size: 4vw;
  font-weight: 700;
  letter-spacing: -0.1vw;
  margin-bottom: 2.4vw;
  @media only screen and (max-width: 575px) {
    font-size: 11vw;
    margin-bottom: 4vw;
    letter-spacing: -0.7vw;
    line-height: 1;
  }
`

const BlockStyle = css`
  padding: 1.5vw;
  background: white;
  border-radius: 0.6vw;
  font-size: 1.15vw;
  overflow: hidden;

  @media only screen and (max-width: 575px) {
    padding: 6vw 6vw;
    border-radius: 2.5vw;
  }
`;

export const Review = styled.div`
  ${BlockStyle};
`;

export const ReviewerHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1vw;

  @media only screen and (max-width: 575px) {
    margin-bottom: 3vw;
  }
`;

export const ReviewerImage = styled.img`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
  margin-right: 0.8vw;
  border: 2px solid var(--granich-black);

  @media only screen and (max-width: 575px) {
    width: 20vw;
    height: 20vw;
    margin-right: 4vw;
  }
`;

export const ReviewerInfo = styled.div`
  font-size: 1.15vw;

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
  }
`;

export const ReviewerName = styled.div`
  font-weight: bold;
  font-size: 1.4vw;
  margin-bottom: 0.5vw;

  @media only screen and (max-width: 575px) {
    font-size: 5vw;
    margin-bottom: 1.5vw;
  }
`;

export const ReviewerStream = styled.div`
  color: var(--granich-grey);
  margin-bottom: 0.4vw;

  @media only screen and (max-width: 575px) {
    margin-bottom: 2vw;
  }
`;

export const ReviewerTelegram = styled.a`
  color: var(--granich-telegram);
  font-size: 1.15vw;
  font-style: italic;
  display: flex;
  margin-left: -0.1vw;
  font-weight: 500;

  svg {
    position: relative;
    top: 0.1vw;
    width: 1vw;
    height: 1vw;
    fill: var(--granich-telegram);
    margin-right: 0.2vw;
  }
  
  :hover {
    color: var(--granich-telegram);
    font-size: 1.15vw;
    font-weight: 500;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;

    svg {
      width: 3.8vw;
      height: 3.8vw;
      margin-right: 1vw;
    }

    :hover {
      font-size: 3.8vw;
    }
  }
`;

export const ReviewerText = styled.div`
  font-size: 1vw;
  line-height: 1.35;
  font-weight: 500;

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    font-weight: normal;
  }
`;

export const ReviewsTelegramChannel = styled.div`
  ${BlockStyle}; 
  padding-top: 2.5vw; 
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 575px) {
    padding-top: 7vw;
    padding-bottom: 7vw;
  }
`;

export const TelegramChannelImage = styled.img`
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  border: 2px solid var(--granich-black);
  margin: 0 auto;
  margin-bottom: 1.7vw;

  @media only screen and (max-width: 575px) {
    width: 20vw;
    height: 20vw;
    margin-bottom: 4vw;
  }
`;

export const TelegramChannelText = styled.div`
  text-align: center;
  margin-bottom: 1.7vw;
  font-weight: 500;
  line-height: 1.35;

  span {
    color: #36ADE0;
    font-weight: 500;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    margin-bottom: 4vw;
    font-weight: normal;

    span {
      font-weight: normal;
    }
  }
`;

export const TelegramChannelButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1.35vw;
  background: var(--granich-telegram-gradient);
  border-radius: 0.3vw;
  padding: 0.8vw 1.3vw;
  color: white;
  transition: transform 0.2s ease;
  box-shadow: 0.15vw 0.15vw 0.4vw rgba(0, 0, 0, 0.25);
  white-space: nowrap;

  svg {
    fill: white;
    width: 1vw;
    height: 1vw;

    :last-child {
      width: 1.5vw;
      height: 1.5vw;
      margin-left: 0.6vw;
    }
  }

  :hover {
    font-size: 1.35vw;
    transform: scale(1.05);
    cursor: pointer;
    color: white;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.9vw;
    border-radius: 1.3vw;
    padding: 3.6vw 5vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);
    margin-right: 0;
    justify-content: center;

    svg {
      fill: white;
      min-width: 4vw;
      min-height: 4vw;
    }

    :hover {
      font-size: 3.9vw;
    }

    :last-child {
      min-width: 4vw;
      min-height: 4vw;
      margin-left: 0.6vw;
    }
  }
`;