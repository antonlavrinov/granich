import React from "react"
import { IFeatures } from "../../../interfaces/course-page"
import { Container } from "../../style"
import Feature from "./feature"
import * as SC from "./Features"

type Props = {
  data: {
    edges: { node: IFeatures }[]
  }
  title: string
}

const Features: React.FC<Props> = ({ data, title }) => {
  return (
    <SC.Section>
      <Container>
        <SC.SectionTitle>{title}</SC.SectionTitle>
        <SC.Wrapper>
          {data.edges.map(feature => {
            return (
              <Feature
                key={feature.node.id}
                link={feature.node.featuresLink}
                image={feature.node.featuresImage.fluid}
                title={feature.node.featuresTitle}
                text={feature.node.featuresText}
              />
            )
          })}
        </SC.Wrapper>
      </Container>
    </SC.Section>
  )
}

export default Features
