import React from "react"
import { Container } from "../style"
import * as SC from "./NotFound"

const NotFound: React.FC = () => {
  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>
            К сожалению, <br />
            Такой страницы нет
          </SC.Title>
          <SC.Text>
            Зато у нас много других интересных страниц.
            <br />
            Выберете самую интересную:
          </SC.Text>
          <SC.LinksWrapper>
            <ul>
              <li>
                <SC.NotFoundLink to="/Poster-in-5-minutes">
                  Как за 5 минут сделать плакат, чтобы клиент его утвердил
                </SC.NotFoundLink>
              </li>
              <li>
                <SC.NotFoundLink to="/conscious-graphic-design-compilation">
                  Осознанная подборка по графдизайну
                </SC.NotFoundLink>
              </li>
              <li>
                <SC.NotFoundLink to="/types-of-typefaces">
                  Виды гарнитур (шрифтов)
                </SC.NotFoundLink>
              </li>
              <li>
                <SC.NotFoundLink to="/Poster-from-scratch-in-neo-geo-style">
                  Графсистема Нео Гео. Пошаговая верстка макета.
                </SC.NotFoundLink>
              </li>
              <li>
                <SC.NotFoundLink to="/Poster-from-scratch-in-techno-style">
                  Графсистема Техно. Пошаговая верстка макета
                </SC.NotFoundLink>
              </li>
            </ul>
          </SC.LinksWrapper>
          <SC.Symbol>404</SC.Symbol>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default NotFound
