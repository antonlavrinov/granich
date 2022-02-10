import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
// import Exclamation from '../../assets/svgs/exclamation-mark.svg';
// import CurrencyIcon from '../../assets/svgs/graph-design/graph-design-currency.svg';

import { graphql, useStaticQuery } from "gatsby"
import * as SC from './PosterForWhom';


const FoundationForWhom = () => {
  const data = useStaticQuery(graphql`
    query posterForWhom {
      posterForWhomImage1: file(
        relativePath: {
          eq: "poster-graphic-design/graphic-designers.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posterForWhomImage2: file(
        relativePath: {
          eq: "poster-graphic-design/web-designers.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      posterForWhomImage3: file(
        relativePath: {
          eq: "poster-graphic-design/identity-designers.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const image1 = data.posterForWhomImage1.childImageSharp.fluid
  const image2 = data.posterForWhomImage2.childImageSharp.fluid
  const image3 = data.posterForWhomImage3.childImageSharp.fluid

  // console.log("image", data.posterForWhomImage1);

  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Для кого этот курс?</SC.Title>
          <SC.InfoWrapper>
            <SC.Items>
                <SC.Item>
                  <SC.ItemImg fluid={image1}/>
                  {/* <SC.Plain/> */}
                  <SC.ItemText>Графические дизайнеры</SC.ItemText>
                </SC.Item>
                <SC.Item>
                  <SC.ItemImg fluid={image2}/>
                  {/* <SC.Plain/> */}
                  <SC.ItemText>Веб-дизайнеры</SC.ItemText>
                </SC.Item>
                <SC.Item>
                  <SC.ItemImg fluid={image3}/>
                  {/* <SC.Plain/> */}
                  <SC.ItemText>Медиа дизайнеры</SC.ItemText>
                </SC.Item>
            </SC.Items>
            <SC.InfoText>
              Курс построен на графических системах. Они позволяют развивать насмотренность графическим дизайнерам и веб-дизайнерам. Вы узнаете различные стили, и сможете предлагать своим клиентам больше проверенных визуальных решений.
            </SC.InfoText>
          </SC.InfoWrapper>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default FoundationForWhom
