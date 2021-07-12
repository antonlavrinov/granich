import React from "react"
import { Link } from "gatsby"
import { Container } from "../style"
import styled from "styled-components"
import ArrowBack from "../../assets/svgs/header-arrow-back.svg"

const ArrowLinkBack = styled(props => <ArrowBack {...props} />)`
  position: absolute;
  top: -0.1vw;
  right: -1.4vw;
  width: 1vw;
  height: 1vw;
  @media only screen and (max-width: 575px) {
    top: 0;
    right: -4.7vw;
    width: 3.1vw;
    height: 3.1vw;
  }
`

const WishesSection = styled.section``

const WishesWrapper = styled.div`
  background: #e8e8e8;
  border-radius: 0.5vw;
  font-family: EB Garamond;
  font-style: italic;
  font-size: 2.37vw;
  font-weight: 500;
  text-align: center;
  padding: 1.4vw;
  letter-spacing: -0.02vw;
  line-height: 1;
  width: 100%;
  margin-bottom: 2vw;
  @media only screen and (max-width: 575px) {
    font-size: 6.6vw;
    padding: 4vw 11vw 6vw;
    line-height: 1.1;
    border-radius: 1.5vw;
  }
`

const WishesLink = styled(props => <Link {...props} />)`
  font-style: italic;
  font-family: EB Garamond;
  font-size: 2.37vw;
  font-weight: 500;
  display: inline-block;
  line-height: 1;
  position: relative;
  :before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -0.5vw;
    width: 100%;
    height: 1px;
    background: #c0c0c0;
  }
  :hover {
    :before {
      display: none;
    }
  }
  @media only screen and (max-width: 575px) {
    font-size: 6.6vw;
    :before {
      bottom: -2vw;
    }
  }
`

const Wishes = () => {
  return (
    <WishesSection>
      <Container>
        <WishesWrapper>
          Приятного обучения и до встречи на{" "}
          <WishesLink to="/#courses">
            Курсах!
            <ArrowLinkBack />
          </WishesLink>
        </WishesWrapper>
      </Container>
    </WishesSection>
  )
}

export default Wishes
