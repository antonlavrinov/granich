import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import { Container } from '../components/style';
import Header from "../components/Header";
import { Link } from "gatsby";

const NotFoundSection = styled.section`

`

const NotFoundWrapper = styled.div`
  background: white;
  border-radius: 0.6vw;
  padding: 4.2vw 3.3vw;
  position: relative;
  min-height: 36.5vw;
  height: 36.5vw;
  @media only screen and (max-width: 575px) {
    border-radius: 2.5vw;
    padding: 7vw 6vw 38vw;
    height: auto;
    min-height: auto;
  }
`

const NotFoundTitle = styled.div`
  font-size: 4.55vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.87;
  color: var(--granich-black);
  margin-bottom: 3.1vw;
  @media only screen and (max-width: 575px) {
    font-size: 8.4vw;
    letter-spacing: -0.5vw;
    line-height: 1.1;
    margin-bottom: 7vw;
  }

`

const NotFoundText = styled.div`
  color: var(--granich-black);
  font-size: 1.6vw;
  margin-top: 0.2vw;
  line-height: 1.55;
  letter-spacing: 0.01vw;
  font-weight: 500;
  margin-bottom: 1.6vw;
  margin-left: -0.2vw;
  @media only screen and (max-width: 575px) {
    font-size: 5.2vw;
    letter-spacing: -0.01vw;
    line-height: 1.5;
    margin-bottom: 8vw;
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

const NotFoundSymbol = styled.div`
  position: absolute;
  bottom: 0;
  right: 2.5vw;
  font-size: 24vw;
  font-family: EB Garamond;
  font-style: italic;
  font-weight: 500;
  color: #F2F2F2;
  letter-spacing: -0.2vw;
  line-height: 0.7;
  user-select: none;
  @media only screen and (max-width: 575px) {
    font-size: 55vw;
    bottom: -2vw;
    right: 5vw;
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
            Оповестим о запуске на других площадках блога школы. <br/>
            Вот несколько других интересных материалов:
          </NotFoundText>
          <NotFoundLinksWrapper>
            <ul>
              <li>
              <NotFoundLink to="/osoznanny-graph-design">Осознанный графдизайн</NotFoundLink>
              </li>
              <li>
              <NotFoundLink to="/graphic-system-vhs">Графсистема VHS</NotFoundLink>
              </li>
            </ul>
            

          </NotFoundLinksWrapper>
        </NotFoundWrapper>
      </Container>

    </NotFoundSection>
  </Layout>
)

export default NotFoundPage
