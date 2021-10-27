import React, { useState } from "react"
import { Container } from "../../style"
import { CopyToClipboard } from "react-copy-to-clipboard"
// import GranichLogoBlack from "../../../assets/svgs/granich-new-black.svg";
import GranichLogoBlack from "./granich_black.svg";
import * as SC from "./Footer"

const Footer: React.FC = () => {
  const [tooltipEmail, setTooltipEmail] = useState<string>("Скопировать")

  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.LogoAndInfo>
            <SC.LogoWrapper href="/">
              <img alt="logo" src={GranichLogoBlack} />
            </SC.LogoWrapper>

            <SC.Info>
              <SC.EmptyText>sometext</SC.EmptyText>
              <SC.InfoYear>© {new Date().getFullYear()}</SC.InfoYear>
              <CopyToClipboard text={"hello@granich.design"}>
                <SC.InfoMail
                  content={tooltipEmail}
                  onMouseLeave={() => setTooltipEmail("Скопировать")}
                  onClick={() => setTooltipEmail("Скопировано :)")}
                >
                  hello@granich.design
                </SC.InfoMail>
              </CopyToClipboard>
            </SC.Info>
          </SC.LogoAndInfo>
          <SC.Links>
            <SC.FooterLink to="/public-offer">
              <span>
                Пользовательское <br />
                соглашение
              </span>
            </SC.FooterLink>
            <SC.FooterLink to="/privacy">
              <span>
                Политика <br />
                конфиденциальности
              </span>
            </SC.FooterLink>
          </SC.Links>
          <SC.CredentialsAndPayment>
            <SC.Credentials>
              ИП Гранич Вадим Владимирович <br />
              ОГРНИП 319784700098871 <br />
              ИНН 470320212730 <br />
            </SC.Credentials>
            <SC.Payment>
              <SC.CloudPayments />
              <SC.Visa />
              <SC.Mastercard />
            </SC.Payment>
          </SC.CredentialsAndPayment>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Footer
