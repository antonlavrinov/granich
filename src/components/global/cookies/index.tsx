import React from "react"
import Check from "../../../assets/svgs/graph-design/graph-design-training-path-check.svg"
import { useCookies } from "./useCookies"
import * as SC from "./Cookies"

const Cookies: React.FC = () => {
  const [cookies, removeCookies] = useCookies()
  return (
    <>
      {cookies && (
        <SC.Wrapper>
          <SC.Text>
            Да, это соглашение на использование <span>cookies</span>.
            Пожалуйста, подтвердите его и закончим на этом ;)
          </SC.Text>
          <SC.TextMobile>
            Да, это соглашение на использование <span>cookies</span>.
            Подтвердите его и закончим на этом ;)
          </SC.TextMobile>
          <SC.Button onClick={removeCookies}>
            Даю добро
            <Check />
          </SC.Button>
        </SC.Wrapper>
      )}
    </>
  )
}

export default Cookies
