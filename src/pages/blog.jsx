import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import { Container } from '../components/style';
import Header from "../components/Header";
import { Link } from "gatsby";
import VKIcon from '../assets/svgs/granich-main-team/vk.svg';
import InstagramIcon from '../assets/svgs/granich-main-team/instagram.svg';
import TelegramIcon from '../assets/svgs/granich-main-team/telegram.svg';




const NotFoundSection = styled.section`

`

const NotFoundWrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 4.2vw 3.3vw ;
  position: relative;
  min-height: 36.5vw;
  // height: 36.5vw;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 7vw 6vw 38vw;
    height: auto;
    min-height: auto;
  }
`

const NotFoundTitle = styled.div`
  font-size: 5vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.87;
  color: var(--granich-black);
  margin-bottom: 3.1vw;
  @media only screen and (max-width: 575px) {
    font-size: 8.4vw;
    letter-spacing: -0.5vw;
    line-height: 1.1;
    margin-bottom: 3vw;
  }

`

const NotFoundText = styled.div`
  color: var(--granich-black);
  font-size: 2vw;
  margin-top: 0.2vw;
  line-height: 1.55;
  letter-spacing: 0.01vw;
  font-weight: 500;
  margin-bottom: 3vw;
  margin-left: -0.2vw;
  @media only screen and (max-width: 575px) {
    font-size: 5.2vw;
    letter-spacing: -0.01vw;
    line-height: 1.5;
    margin-bottom: 5vw;
  }
`

const NotFoundLinksWrapper = styled.div`
  position: relative;
  z-index: 2;
  ul {
    li {
      margin-bottom: 0.5vw;
    }
  }
  @media only screen and (max-width: 575px) {
    ul {
      li {
        margin-bottom: 1.8vw;
      }
    }
  }

`

const NotFoundLink = styled(props => <Link {...props}/>)`
  color: var(--granich-red);
  font-weight: 500;
  border-bottom: 1px solid var(--granich-red);
  font-size: 1.15vw;
  :hover {
    border-bottom: none;
    font-weight: 500;
    color: var(--granich-red);
    font-size: 1.15vw;
  }
  @media only screen and (max-width: 575px) {
    font-size: 3.8vw;
    :hover {
      font-size: 3.8vw;
  }


`
const NotFoundSocials = styled.div`
  display: flex;
  align-items: center;
  align-items: flex-start;
  flex-direction: column;
`

const NotFoundSocial = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4vw;
  margin-bottom: 2vw;
  :last-child {
    margin-bottom: 0;
  }
  svg {
    margin-right: 1vw;
    width: 3.5vw;
    height: 3.5vw;
  }
  a {
    font-size: 1.8vw;
    border-bottom: 1px solid var(--granich-light-grey);
    :hover {
      border-bottom: 1px solid var(--granich-black);
    }
  }
  @media only screen and (max-width: 575px) {
    margin-bottom: 5vw;
    a {
      font-size: 4.5vw;
    }
    svg {
      margin-right: 2.5vw;
      width: 10vw;
      height: 10vw;
    }
  }
`



const NotFoundPage = () => (
  <Layout>
    <SEO title="Страница не найдена" />
    <Header type={'dark'}/>
    <div className="section-top-block"></div>
    <NotFoundSection>
      <Container>
        <NotFoundWrapper>
          <NotFoundTitle>
            Блог в разработке...
          </NotFoundTitle>
          <NotFoundText>
            Когда мы его запустим на сайте мы оповестим на других площадках, где ведем блог школы:
            {/* Оповестим о запуске на других площадках блога школы. <br/> 
            Вот несколько других интересных материалов: */}
          </NotFoundText>
          <NotFoundSocials>
            <NotFoundSocial>
              <VKIcon/> <a href="https://vk.com/granichvk" target="_blank">vk.com/granichvk</a>
            </NotFoundSocial>
            <NotFoundSocial>
              <TelegramIcon/> <a href="https://t.me/granichannel" target="_blank">t.me/granichannel</a>
            </NotFoundSocial>
            <NotFoundSocial>
              <InstagramIcon/> <a href="https://www.instagram.com/granichgram" target="_blank">@granichgram</a>
            </NotFoundSocial>
          </NotFoundSocials>
          {/* <NotFoundLinksWrapper>
            <ul>
              <li>
              <NotFoundLink to="/osoznanny-graph-design">Осознанный графдизайн</NotFoundLink>
              </li>
              <li>
              <NotFoundLink to="/graphic-system-vhs">Графсистема VHS</NotFoundLink>
              </li>
            </ul>
            

          </NotFoundLinksWrapper> */}
        </NotFoundWrapper>
      </Container>

    </NotFoundSection>
  </Layout>
)

export default NotFoundPage
