import React from "react"
import styled from "styled-components"
import { Container } from "../../style"
// import Exclamation from '../../assets/svgs/exclamation-mark.svg';
// import CurrencyIcon from '../../assets/svgs/graph-design/graph-design-currency.svg';

import { graphql, useStaticQuery } from "gatsby"
import * as SC from './MetaphorsForWhom'


const MetaphorsForWhom = () => {
  const data = useStaticQuery(graphql`
    query metaphorsForWhom {
      metaphorsForWhomImage1: file(
        relativePath: {
          eq: "metaphors-in-identity-page/identity.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metaphorsForWhomImage2: file(
        relativePath: {
          eq: "metaphors-in-identity-page/packaging.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metaphorsForWhomImage3: file(
        relativePath: {
          eq: "metaphors-in-identity-page/covers.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      metaphorsForWhomImage4: file(
        relativePath: {
          eq: "metaphors-in-identity-page/poster.png"
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

  const image1 = data.metaphorsForWhomImage1.childImageSharp.fluid
  const image2 = data.metaphorsForWhomImage2.childImageSharp.fluid
  const image3 = data.metaphorsForWhomImage3.childImageSharp.fluid
  const image4 = data.metaphorsForWhomImage4.childImageSharp.fluid

  return (
    <SC.Section>
      <Container>
        <SC.Wrapper>
          <SC.Title>Для кого этот курс?</SC.Title>
          <SC.InfoWrapper>
            <SC.Items>
                <SC.Item>
                  <SC.ItemImg fluid={image1}/>
                  <SC.ItemText><b>Дизайнеру айдентики</b><p>Чтобы наполнить идентичность бренда смыслом</p></SC.ItemText>
                </SC.Item>
                <SC.Item>
                  <SC.ItemImg fluid={image2}/>
                  <SC.ItemText><b>Дизайнеру упаковки</b><p>Чтобы сделать товар интереснее для покупателя</p></SC.ItemText>
                </SC.Item>
                <SC.Item>
                  <SC.ItemImg fluid={image3}/>
                  <SC.ItemText><b>Дизайнеру обложек книг и альбомов</b><p>Чтобы передать содержание музыки или слов</p></SC.ItemText>
                </SC.Item>
                <SC.Item>
                  <SC.ItemImg fluid={image4}/>
                  <SC.ItemText><b>Дизайнеру плакатов и афиш</b><p>Чтобы создать работы с более глубоким содержанием</p></SC.ItemText>
                </SC.Item>
            </SC.Items>
            {/* <SC.InfoText>
              Дизайнеру айдентики курс поможет наполнить бренд смыслом. Дизайнеру упаковки — сделать товар интереснее для покупателя. Дизайнеру обложек музыкальных альбомов и книг — передать смысл музыки и слов. Дизайнеру афиш — отразить атмосферу мероприятия, а дизайнеру плакатов — делать работы с глубоким содержанием
            </SC.InfoText> */}
          </SC.InfoWrapper>
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default MetaphorsForWhom
