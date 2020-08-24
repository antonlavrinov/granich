import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import styled from 'styled-components';
import { Container } from '../components/style';
import Header from "../components/Header";
import { Link } from "gatsby";

const NotFoundSection = styled.section`
  padding-top: 8.4vw;
  // margin-bottom: 5vw;
`

const NotFoundWrapper = styled.div`
  background: white;
  border-radius: 0.5vw;
  padding: 4.2vw 3.3vw;
  position: relative;
  min-height: 36.5vw;
  height: 36.5vw;
`

const NotFoundTitle = styled.div`
  font-size: 4.55vw;
  letter-spacing: -0.2vw;
  font-weight: 700;
  line-height: 0.87;
  color: var(--granich-black);
  margin-bottom: 3.1vw;

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
`

const NotFoundLinksWrapper = styled.div`

  ul {
    li {
      margin-bottom: 0.5vw;
    }
  }

`

const NotFoundLink = styled(props => <Link {...props}/>)`
  color: var(--granich-red);
  font-weight: 500;
  border-bottom: 1.5px solid var(--granich-red);
  font-size: 1.15vw;
  :hover {
    border-bottom: none;
    font-weight: 500;
    color: var(--granich-red);
    font-size: 1.15vw;
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
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="Страница не найдена" />
    <Header type={'dark'}/>
    <NotFoundSection>
      <Container>
        <NotFoundWrapper>
          <NotFoundTitle>
          К сожалению, <br/>Такой страницы нет
          </NotFoundTitle>
          <NotFoundText>
            Зато у нас много других интересных страниц.<br/>
            Выберете самую интересную:
          </NotFoundText>
          <NotFoundLinksWrapper>
            <ul>
              <li>
              <NotFoundLink to="/osoznanny-graph-design">Осознанный графдизайн</NotFoundLink>
              </li>
              <li>
              <NotFoundLink to="/osoznanny-graph-design">Графсистема VHS</NotFoundLink>
              </li>
            </ul>
            

          </NotFoundLinksWrapper>
          <NotFoundSymbol>404</NotFoundSymbol>
        </NotFoundWrapper>
      </Container>

    </NotFoundSection>
  </Layout>
)

export default NotFoundPage
