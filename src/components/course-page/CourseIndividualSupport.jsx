import React from "react"
import styled from "styled-components"
import { Container } from "../style"
import BackgroundImage from "gatsby-background-image"
import { graphql, useStaticQuery } from "gatsby"
import TelegramIcon from "../../assets/svgs/telegram-plane-brands.svg"
import ArrowLongRightIcon from "../../assets/svgs/arrow-long-right.svg"
import FreelanceLogoIcon from "../../assets/svgs/freelance/freelance-offer-logo.svg"

const FreelanceLogo = styled(props => <FreelanceLogoIcon {...props} />)`
  width: 12vw;
  min-width: 12vw;
  margin-right: 1.6vw;
  @media only screen and (max-width: 575px) {
    width: 60%;
    margin-right: 0;
    margin-bottom: 5vw;
  }
`

const SupportSection = styled.section`
  margin-bottom: 4vw;
  margin-top: 4vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    margin-top: 5vw;
  }
`
const SupportWrapper = styled.div`
  background: white;
  padding: 4vw 4vw;
  border-radius: 0.6vw;
  @media only screen and (max-width: 575px) {
    padding: 11vw 8vw 11vw 8vw;
    border-radius: 2.5vw;
  }
`
const SupportSecondaryWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column-reverse;
  }
`
const SupportAuthor = styled.div`
  margin-right: 2vw;
  margin-left: 0.2vw;
  margin-top: -1vw;
  @media only screen and (max-width: 575px) {
    display: flex;
    align-items: center;
  }
`

const SupportInfo = styled.div``

const SupportAuthorImage = styled(props => (
  <BackgroundImage {...props}></BackgroundImage>
))`
  width: 11vw;
  height: 11vw;
  border-radius: 100vw;
  overflow: hidden;
  margin-left: -0.5vw;
  margin-bottom: 1vw;
  @media only screen and (max-width: 575px) {
    width: 20vw;
    height: 20vw;
    min-width: 20vw;
    min-height: 20vw;
    margin-right: 3vw;
  }
`

const SupportAuthorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 14vw;

  @media only screen and (max-width: 575px) {
    // margin-top: 3vw;
  }
`

const SupportAuthorName = styled.div`
  font-size: 1.16vw;
  font-weight: 500;
  line-height: 1.4;
  margin-left: 0.5vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.6vw;
  }
`

const SupportAuthorText = styled.div`
  margin-left: 0.5vw;
  font-size: 1.16vw;
  line-height: 1.4;
  color: var(--granich-grey);
  @media only screen and (max-width: 575px) {
    font-size: 3.6vw;
  }
`

const SupportInfoTitle = styled.h2`
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  font-size: 4.1vw;
  line-height: 0.75;
  position: relative;
  margin-bottom: 4vw;
  margin-left: 0vw;
  white-space: nowrap;
  letter-spacing: -0.115vw;
  @media only screen and (max-width: 575px) {
    white-space: normal;
    font-size: 8.9vw;
    margin-left: 0;
    letter-spacing: -0.4vw;
    margin-bottom: 6.8vw;
    line-height: 1;
  }
`

const SupportInfoText = styled.div`
  font-weight: 500;
  line-height: 1.5;
  border: 2px solid var(--granich-black);
  border-radius: 100vw;
  padding: 0.5vw 1vw;

  display: inline-block;
  font-size: 1.3vw;
  margin-right: 0.7vw;
  :nth-child(2) {
    margin-right: 1.7vw;
    position: relative;
    :after {
      content: "+";
      position: absolute;
      top: 0;
      right: -2vw;
      font-size: 2vw;
      color: var(--granich-light-grey);
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.4vw;
    padding: 1vw 2vw;
    margin-right: 1.3vw;
    margin-bottom: 2vw;
    :nth-child(2) {
      margin-bottom: 8vw;
      :after {
        content: "+";
        bottom: -8vw;
        top: auto;
        left: 5vw;
        right: auto;
        font-size: 5vw;
      }
    }
  }
  ${props =>
    props.red &&
    `
        color: var(--granich-red);
        border-color: var(--granich-red);
        margin-right: 0;
        @media only screen and (max-width: 575px) {
            margin-right: 0vw;
        }
    `}
`

const SupportInfoRules = styled.div`
  display: flex;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    margin-bottom: 6.8vw;
  }
`

const SupportInfoRule = styled.div`
  position: relative;
  font-size: 1.15vw;
  color: var(--granich-grey);
  width: 16vw;
  line-height: 1.4;
  margin-right: 1.3vw;
  :nth-child(n + 2) {
    margin-right: 0.8vw;
  }
  :nth-child(n + 3) {
    width: 20vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
    width: auto;
    margin-right: 0;
    margin-left: 5.5vw;
    margin-bottom: 4vw;
    :nth-child(n + 3) {
      width: auto;
    }
  }
`

const SupportRuleTitle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 1.15vw;
  @media only screen and (max-width: 575px) {
    font-size: 3.7vw;
  }
`

const SupportRuleNumber = styled.div`
  position: absolute;
  top: 0;
  left: -2vw;
  font-size: 2.3vw;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  line-height: 0.5;
  @media only screen and (max-width: 575px) {
    font-size: 7.2vw;
    left: -5.7vw;
    top: 1.5vw;
  }
`

const SupportFooter = styled.div`
  background: #f2f2f2;
  border-radius: 0.5vw;
  padding: 1vw 2.2vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.5vw;
  @media only screen and (max-width: 575px) {
    flex-direction: column;
    background: white;
    padding: 0;
  }
`

const SupportPriceText = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2vw;
  line-height: 1.3;
  color: var(--granich-grey);
  span {
    display: block;
    font-family: EB Garamond;
    font-size: 4vw;
    font-style: italic;
    margin-left: 1.5vw;
    line-height: 1;
    margin-top: -0.4vw;
    letter-spacing: -0.1vw;
    white-space: nowrap;
  }
  @media only screen and (max-width: 575px) {
    font-size: 4vw;
    margin-bottom: 3vw;
    margin-top: 5vw;
    span {
      font-size: 10.5vw;
      font-style: italic;
      margin-left: 5vw;
      line-height: 1;
      margin-top: -0.4vw;
      letter-spacing: -0.1vw;
    }
  }
`

const SupportButton = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.4vw;
  background: var(--granich-telegram-gradient);
  border-radius: 0.3vw;
  padding: 1.2vw 2vw;
  color: white;
  transition: transform 0.2s ease;
  box-shadow: 0.15vw 0.15vw 0.4vw rgba(0, 0, 0, 0.25);
  svg {
    width: 2vw;
    height: 2vw;
    fill: white;
    margin-left: 0.5vw;
  }
  :hover {
    font-size: 1.4vw;
    transform: scale(1.03);
    cursor: pointer;
    color: white;
  }

  @media only screen and (max-width: 575px) {
    font-size: 3.9vw;
    border-radius: 1.3vw;
    padding: 3.6vw 3vw;
    box-shadow: 0.5vw 0.5vw 1vw rgba(0, 0, 0, 0.25);
    :hover {
      font-size: 3.9vw;
    }
    margin-bottom: 4vw;
    width: 100%;
    margin-right: 0;
    justify-content: center;
    svg {
      width: 4vw;
      height: 4vw;
      fill: white;
      margin-left: 2vw;
    }
  }
`

const SupportArrow = styled(props => <ArrowLongRightIcon {...props} />)`
  fill: rgba(0, 0, 0, 0.2);
  width: 8vw;
  @media only screen and (max-width: 575px) {
    display: none;
  }
`

const SupportInfoDescr = styled.div`
  line-height: 1.5;
  font-size: 1.46vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 8vw;
    font-size: 4vw;
  }
`

// const SupportInfoTagList = styled.div`
//     display: flex;
// `

// const SupportInfoTag = styled.div`
//     font-weight: 500;
//     font-size: 1.15vw;
//     line-height: 1.5;

//     border: 1px solid var(--granich-black);
//     border-radius: 100vw;
//     padding: 0.2vw 0.8vw;
//     display: inline-block;
//     margin-right: 1vw;
//     @media only screen and (max-width: 575px) {
//         font-size: 4.3vw;
//         padding: 2vw 4vw;
//     }
// `

const SupportTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 2.2vw;
  @media only screen and (max-width: 575px) {
    margin-bottom: 1vw;
  }
`
// const SupportInfoAdditionalText = styled.div`
//     font-size: 1.15vw;
//     color: var(--granich-grey);
//     max-width: 24vw;
//     margin-left: 1vw;
//     line-height: 1.35;
//     position: relative;
//     padding-left: 1.5vw;
//     :before {
//         content: '+';
//         position: absolute;
//         top: 0;
//         left: -0.3vw;
//         font-size: 2vw;
//         color: var(--granich-light-grey);
//     }
//     @media only screen and (max-width: 575px) {
//         display: block;
//         margin-top: 4vw;
//         font-size: 3.7vw;
//         max-width: 100%;
//         padding-left: 4vw;
//         :before {
//             top: 45%;
//             transform: translateY(-50%);
//             left: -1.5vw;
//             line-height: 1;
//             font-size: 6vw;
//             color: var(--granich-light-grey);
//         }
//     }
// `

const CourseIndividualSupport = () => {
  const data = useStaticQuery(graphql`
    query authorIndividualSupportImage {
      placeholderImage: file(relativePath: { eq: "author.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 250, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const imageData = data.placeholderImage.childImageSharp.fluid
  return (
    <SupportSection id="individual-support">
      <Container>
        <SupportWrapper>
          <SupportInfoTitle>
            Личное&nbsp;обучение&nbsp;— Графдизайн&nbsp;+&nbsp;Фриланс
          </SupportInfoTitle>
          <SupportSecondaryWrapper>
            <SupportAuthor>
              <SupportAuthorImage
                fluid={imageData}
                style={{ backgroundSize: "cover" }}
              />
              <SupportAuthorInfoWrapper>
                <SupportAuthorName>Вадим Гранич</SupportAuthorName>
                <SupportAuthorText>
                  Основатель&nbsp;школы, <br />
                  автор курсов про графдизайн&nbsp;и&nbsp;фриланс
                </SupportAuthorText>
              </SupportAuthorInfoWrapper>
            </SupportAuthor>
            <SupportInfo>
              <SupportTagsWrapper>
                <SupportInfoText>С Вадимом Граничем</SupportInfoText>
                <SupportInfoText red>Осознанный Графдизайн</SupportInfoText>
                <FreelanceLogo />
                {/* <SupportInfoAdditionalText>
                                    
                                Возможно общение на другие темы. (Например, по фрилансу)
                                </SupportInfoAdditionalText> */}
                {/* <SupportInfoTagList>
                                    <SupportInfoTag>
                                        С Вадимом Граничем
                                    </SupportInfoTag>
                                    <SupportInfoTag>
                                        С Вадимом Граничем
                                    </SupportInfoTag>
                                    <SupportInfoTag>
                                        С Вадимом Граничем
                                    </SupportInfoTag>
                                    
                                </SupportInfoTagList> */}
              </SupportTagsWrapper>
              <SupportInfoDescr>
                Я лично обучу вас графическому дизайну, после чего выведу вас
                на&nbsp;фриланс. Для этого я&nbsp;помогу вам создать учебное
                портфолио под&nbsp;запросы рынка, развить личный бренд
                и&nbsp;освоить инструменты маркетинга для&nbsp;графдизайнера
                на&nbsp;фрилансе. Подробные условия можно обсудить со&nbsp;мной
                лично.
              </SupportInfoDescr>

              {/* <SupportInfoRules>
                                <SupportRule title={``}
                                            text={`Даю 3 поблажки по дедлайнам (каждая поблажка это +1 неделя к дедлайну)`}
                                            number={1}
                                />
                                <SupportRule title={``}
                                            text={`Договор на обучение заключается индивидуально, подписывается между мной и вами`}
                                            number={2}
                                />
                                <SupportRule title={``}
                                            text={`Уроки будут не в записи, а лично проводиться мной. Чтобы мы могли остановиться на непонятных моментах и углубиться в интересную тему`}
                                            number={3}
                                />
                            </SupportInfoRules> */}
            </SupportInfo>
          </SupportSecondaryWrapper>
          <SupportFooter>
            <SupportPriceText>
              Стоимость <br />
              прохождения
              <span>242 000 ₽</span>
            </SupportPriceText>
            <SupportArrow />
            <SupportButton
              rel="noopener noreferrer"
              href="https://t.me/vadim_granich"
              target="_blank"
            >
              Написать Вадиму в Телеграм
              <TelegramIcon />
            </SupportButton>
          </SupportFooter>
        </SupportWrapper>
      </Container>
    </SupportSection>
  )
}

export default CourseIndividualSupport

// const SupportRule = ({title, text, number}) => {
//     return (
//         <SupportInfoRule>
//             <SupportRuleTitle>{title}</SupportRuleTitle>
//                 {text}
//                 <SupportRuleNumber>{number}</SupportRuleNumber>
//         </SupportInfoRule>
//     )
// }
