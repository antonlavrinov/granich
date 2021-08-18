import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
// import Exclamation from '../../assets/svgs/exclamation-mark.svg';
// import CurrencyIcon from '../../assets/svgs/graph-design/graph-design-currency.svg';

import { graphql, useStaticQuery } from "gatsby"
import * as SC from './FoundationForWhom'


const FoundationForWhom = () => {
  const data = useStaticQuery(graphql`
    query foundationForWhom {
      foundationForWhomImage1: file(
        relativePath: {
          eq: "foundation-of-graph-design/newbees.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foundationForWhomImage2: file(
        relativePath: {
          eq: "foundation-of-graph-design/supervisors.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      foundationForWhomImage3: file(
        relativePath: {
          eq: "foundation-of-graph-design/marketers.png"
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

  const image1 = data.foundationForWhomImage1.childImageSharp.fluid
  const image2 = data.foundationForWhomImage2.childImageSharp.fluid
  const image3 = data.foundationForWhomImage3.childImageSharp.fluid

  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Для кого этот курс?</SC.Title>
          <SC.InfoWrapper>
            <SC.Items>
                <SC.Item>
                    <SC.ItemImg fluid={image1}/>
                {/* <ExplainItemNumber>1</ExplainItemNumber> */}
                <SC.ItemText>Новички в дизайне</SC.ItemText>
                </SC.Item>
                <SC.Item>
                <SC.ItemImg fluid={image2}/>
                {/* <ExplainItemNumber>2</ExplainItemNumber> */}
                <SC.ItemText>Руководители</SC.ItemText>
                </SC.Item>
                <SC.Item>
                <SC.ItemImg fluid={image3}/>
                {/* <ExplainItemNumber>3</ExplainItemNumber> */}
                <SC.ItemText>Маркетологи</SC.ItemText>
                </SC.Item>
            </SC.Items>
            <SC.InfoText>
                Курс построен на дизайн-системе и композициях. Это потрясающий фундамент, который создаст у вас системное понимание визуального слоя дизайна. Вы сможете уверенно общаться с другими дизайнерами, создавать макеты по проверенным решениям, и быстрее развиваться в других направлениях дизайна.
            </SC.InfoText>
          </SC.InfoWrapper>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default FoundationForWhom
